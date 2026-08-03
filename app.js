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