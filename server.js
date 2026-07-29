// require('dotenv').config();

// const express = require('express');
// const fs = require('fs').promises;
// const path = require('path');
// const nunjucks = require('nunjucks');

// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// const viewsPath = path.join(__dirname, 'views');

// const fakeData = require('./fakeData');
// const commonData = require('./commonData');


// // Настраиваем Nunjucks
// // nunjucks.configure(path.join(__dirname, 'views'), {
// //   autoescape: true,
// //   express: app, // связываем с Express
// //   watch: true, // для автоматической перезагрузки шаблонов при изменениях (в разработке)
// // });
// // Настраиваем Nunjucks и сохраняем инстанс в переменную env
// const env = nunjucks.configure(path.join(__dirname, 'views'), {
//   autoescape: true,
//   express: app, // связываем с Express
//   watch: true, // для автоматической перезагрузки шаблонов при изменениях (в разработке)
// });

// // Устанавливаем движок представлений
// app.set('view engine', 'html');
// app.set('views', viewsPath);

// // Мидлвар для парсинга JSON тела запросов
// app.use(bodyParser.json());



// app.use((req, res, next) => {
//   res.locals.commonData = commonData;
//   next();
// });

// app.get('/api/children', (req, res) => {
//   const limit = parseInt(req.query.limit) || 3;
//   const filter = req.query.filter || 'all';

//   // 1. Берем данные из централизованного массива в commonData
//   let baseArray = (commonData && commonData.children) || [];

//   // 2. Если нажата кнопка в блоке "Вы помогли" — фильтруем по флагу youHelped
//   if (filter === 'user_helped') {
//     baseArray = baseArray.filter(child => child.youHelped === true);
//   }

//   // 3. Отрезаем нужную порцию от 0 до текущего лимита (3, 6, 9...)
//   const slicedChildren = baseArray.slice(0, limit);
//   let htmlResult = '';
  
//   try {
//     slicedChildren.forEach(child => {
//       // Рендерим компонент карточки. Передаем child и сам commonData для путей/иконок
//       htmlResult += env.render('components/child-card.html', { 
//         child: child,
//         commonData: commonData 
//       });
//     });

//     // Отдаем чистый ответ фронтенду
//     res.json({
//       html: htmlResult,
//       hasMore: slicedChildren.length < baseArray.length // Есть ли еще карточки?
//     });
//   } catch (error) {
//     console.error('Ошибка Nunjucks при AJAX-рендере:', error);
//     res.status(500).json({ error: error.message });
//   }
// });



// async function setupRoutes() {
//   const files = await fs.readdir(viewsPath);
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
// }


// setupRoutes();





// // const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// // const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// app.use(express.json()); // Чтобы сервер мог принимать JSON в теле POST-запросов

// app.use(express.static(path.join(__dirname, 'public')));

// const multer = require('multer');
// const upload = multer();

// // app.post('/api/call', upload.single('file'), async (req, res) => {
// //   const { name, phone, comment, email, agree } = req.body;
// //   const file = req.file;

// //   if (!phone) {
// //     return res.status(400).json({ message: 'Телефон и согласие с политикой обязательны' });
// //   }

// //   const messageText = `
// // Новая заявка с сайта schatz:
// // Имя: ${name}
// // Телефон: ${phone}
// // Email: ${email || 'Не указано'}
// // Комментарий: ${comment || 'Не указан'}
// // Согласие: Да
// //   `;

// //   const urlMessage = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// //   try {
// //     // Сначала отправим текстовое сообщение
// //     await fetch(urlMessage, {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({
// //         chat_id: TELEGRAM_CHAT_ID,
// //         text: messageText,
// //       })
// //     });

// //     if (file) {
// //       // Для отправки файла используем FormData
// //       const formData = new FormData();
// //       formData.append('chat_id', TELEGRAM_CHAT_ID);
// //       formData.append('document', new Blob([file.buffer], { type: file.mimetype }), file.originalname);

// //       const urlDoc = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;

// //       const response = await fetch(urlDoc, {
// //         method: 'POST',
// //         body: formData,
// //         // headers: автоматически выставляются fetch для multipart/form-data
// //       });

// //       const data = await response.json();

// //       if (!data.ok) {
// //         throw new Error(data.description);
// //       }
// //     }

// //     res.json({ success: true, message: 'Заявка и файл успешно отправлены в Telegram' });
// //   } catch (error) {
// //     console.error('Ошибка отправки в Telegram:', error);
// //     res.status(500).json({ message: 'Ошибка сервера при отправке сообщения в Telegram' });
// //   }
// // });


// app.listen(port, () => {
//   console.log(`Сервер запущен на http://localhost:${port}`);
// });

const app = require('./app');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

// Статика нужна только при локальном запуске (на Vercel этим рулит сам CDN)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен локально: http://localhost:${PORT}`);
});