require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const multer = require('multer');

const app = express();
const upload = multer();

const viewsPath = path.join(__dirname, 'views');
const fakeData = require('./fakeData');
const commonData = require('./commonData');
const { version } = require('os');

// 1. Настройка Nunjucks
const env = nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: process.env.NODE_ENV !== 'production',
});

app.set('view engine', 'html');
app.set('views', viewsPath);

// 2. Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cssDir = path.join(__dirname, 'public', 'css');
let cssFiles = [];

try {
  const files = fs.readdirSync(cssDir).filter(file => path.extname(file) === '.css');
  cssFiles = files.map(file => {
    const filePath = path.join(cssDir, file);
    const stats = fs.statSync(filePath); 
    
    return {
      name: file,
      version: stats.mtimeMs 
    };
  });
} catch (err) {
  console.error('Не удалось прочитать папку public/css:', err.message);
}

app.use((req, res, next) => {
  res.locals.commonData = commonData;
  res.locals.cssFiles = cssFiles;
  next();
});


// 3. API Маршруты

// AJAX список детей
app.get('/api/children', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 3;
  const filter = req.query.filter || 'all';

  let baseArray = (commonData && commonData.children) || [];

  if (filter === 'user_helped') {
    baseArray = baseArray.filter(child => child.youHelped === true);
  }

  const slicedChildren = baseArray.slice(0, limit);
  let htmlResult = '';

  try {
    slicedChildren.forEach(child => {
      htmlResult += env.render('components/child-card.html', {
        child,
        commonData
      });
    });

    res.json({
      html: htmlResult,
      hasMore: slicedChildren.length < baseArray.length
    });
  } catch (error) {
    console.error('Ошибка Nunjucks при AJAX-рендере:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/docs', (req, res) => {
  // Получаем лимит из запроса (например, при первом клике прилетит 8, потом 12 и т.д.)
  const limit = parseInt(req.query.limit, 10) || 4;
  const type = req.query.type || 'docs';

  let baseArray = [];
  if (type === 'reports') {
    baseArray = (commonData && commonData.reports) || [];
  } else {
    baseArray = (commonData && commonData.docs) || [];
  }

  // Нарезаем строго от 0 до текущего требуемого лимита
  const slicedItems = baseArray.slice(0, limit);
  let htmlResult = '';

  try {
    slicedItems.forEach(item => {
      htmlResult += env.render('components/doc-card.html', {
        item,
        commonData
      });
    });

    res.json({
      html: htmlResult,
      // true если в базе осталось еще что-то, что не вошло в текущую нарезку
      hasMore: slicedItems.length < baseArray.length
    });
  } catch (error) {
    console.error('Ошибка Nunjucks при AJAX-рендере документов:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/news', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 6;

  const baseArray = (commonData && commonData.newsData) || [];
  const slicedItems = baseArray.slice(0, limit);
  let htmlResult = '';

  try {
    slicedItems.forEach(item => {
      htmlResult += env.render('components/news-card.html', {
        item,
        commonData
      });
    });

    res.json({
      html: htmlResult,
      hasMore: slicedItems.length < baseArray.length
    });
  } catch (error) {
    console.error('Ошибка Nunjucks при AJAX-рендере новостей:', error);
    res.status(500).json({ error: error.message });
  }
});

// Отправка в Telegram
app.post('/api/call', upload.single('file'), async (req, res) => {
  const { name, phone, comment, email } = req.body;
  const file = req.file;

  if (!phone) {
    return res.status(400).json({ message: 'Телефон обязателен' });
  }

  const messageText = `
Новая заявка с сайта schatz:
Имя: ${name || 'Не указано'}
Телефон: ${phone}
Email: ${email || 'Не указан'}
Комментарий: ${comment || 'Не указан'}
Согласие: Да
  `;

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  try {
    // Текстовое сообщение
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: messageText }),
    });

    const data = await response.json();
    if (!data.ok) throw new Error(data.description);

    // Документ (если есть)
    if (file) {
      const formData = new FormData();
      formData.append('chat_id', TELEGRAM_CHAT_ID);
      formData.append('document', new Blob([file.buffer], { type: file.mimetype }), file.originalname);

      const docRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
        method: 'POST',
        body: formData,
      });
      const docData = await docRes.json();
      if (!docData.ok) throw new Error(docData.description);
    }

    res.json({ success: true, message: 'Заявка успешно отправлена' });
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    res.status(500).json({ message: 'Ошибка сервера при отправке сообщения' });
  }
});


app.post('/api/donate', async (req, res) => {
  const { 
    // Данные со старой формы:
    paymentType, 
    agreement,
    name,

    // Данные с новой формы (поп-апа):
    frequency, 
    paymentMethod, 
    comment, 
    firstname, 
    lastname, 
    privacyPolicy, 
    offerAgreement,

    // Общие поля для обеих форм:
    amount, 
    email 
  } = req.body;

  // 1. Собираем единое имя (работает и для старой, и для новой формы)
  let fullName = '';
  if (firstname || lastname) {
    fullName = `${firstname || ''} ${lastname || ''}`.trim();
  } else if (name) {
    fullName = name.trim();
  }

  // 2. Валидация обязательных полей
  if (!amount || !fullName || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Заполните обязательные поля: имя, email и сумма' 
    });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('❌ ОШИБКА: TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env!');
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка настройки сервера' 
    });
  }

  // 3. Определяем периодичность и способ оплаты
  const rawFrequency = frequency || paymentType;
  const frequencyLabel = rawFrequency === 'monthly' ? 'Ежемесячно 🔄' : 'Разово ⚡';
  
  const paymentMethodLabel = paymentMethod === 'sbp' ? 'СБП 📱' : 'Банковская карта 💳';

  // 4. Формируем сообщение для Telegram
  let messageText = `
❤️ *Новое пожертвование!*

*Имя:* ${fullName}
*Email:* ${email}
*Сумма:* ${amount} ₽
*Тип:* ${frequencyLabel}
  `.trim();

  // Если запрос пришел с новой пошаговой формы (где есть способ оплаты и комментарий)
  if (paymentMethod) {
    messageText += `\n*Способ оплаты:* ${paymentMethodLabel}`;
  }
  if (comment) {
    messageText += `\n*Комментарий:* ${comment}`;
  }

  // Согласия
  const isAgreed = agreement || (privacyPolicy && offerAgreement);
  messageText += `\n*Согласие с правилами:* ${isAgreed ? 'Да ✅' : 'Нет ❌'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('❌ Telegram API Error:', data);
      throw new Error(data.description || 'Ошибка Telegram API');
    }

    res.json({ success: true, message: 'Пожертвование успешно отправлено' });
  } catch (error) {
    console.error('❌ Ошибка отправки пожертвования:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Ошибка сервера при отправке сообщения' 
    });
  }
});



// 4. Динамические страницы (Синхронный `readdirSync` надежнее при билде Vercel)
// try {
//   const files = fs.readdirSync(viewsPath);
//   files.forEach((file) => {
//     if (path.extname(file) === '.html') {
//       const name = path.basename(file, '.html');
//       const route = file === 'index.html' ? '/' : '/' + name;
      
//       app.get(route, (req, res) => {
//         const pageData = fakeData[name] || {};
//         res.render(file, pageData);
//       });
//     }
//   });
// } catch (err) {
//   console.error('Не удалось прочитать папку views:', err);
// }
try {
  const files = fs.readdirSync(viewsPath);
  files.forEach((file) => {
    if (path.extname(file) === '.html') {
      const name = path.basename(file, '.html');
      const route = file === 'index.html' ? '/' : '/' + name;
      
      app.get(route, (req, res) => {
        const pageData = fakeData[name] || {};
        
        // Добавляем колбэк для перехвата синтаксических ошибок Nunjucks
        res.render(file, pageData, (err, html) => {
          if (err) {
            console.error(`[Nunjucks Error] Ошибка рендера страницы ${file}:`, err);
            return res.status(500).send(`Nunjucks Error: ${err.message}`);
          }
          res.send(html);
        });
      });
    }
  });
} catch (err) {
  console.error('Не удалось прочитать папку views:', err);
}


module.exports = app;