require('dotenv').config();

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();

const viewsPath = path.join(__dirname, '..', 'views');

const fakeData = require(path.join(__dirname, '..', 'fakeData'));
const commonData = require(path.join(__dirname, '..', 'commonData'));

// Настраиваем Nunjucks
nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: true,
});

app.set('view engine', 'html');
app.set('views', viewsPath);

// Мидлвар для парсинга JSON тела запросов
app.use(bodyParser.json());

// Middleware для commonData в шаблонах
app.use((req, res, next) => {
  res.locals.commonData = commonData;
  next();
});

// Настройка маршрутов на основе файлов .html
async function setupRoutes() {
  const files = await fs.readdir(viewsPath);
  files.forEach((file) => {
    if (path.extname(file) === '.html') {
      const name = path.basename(file, '.html');
      const route = file === 'index.html' ? '/' : '/' + name;
      app.get(route, (req, res) => {
        const pageData = fakeData[name] || {};
        res.render(file, pageData);
      });
    }
  });
}
setupRoutes();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(express.json()); // Чтобы сервер мог принимать JSON в теле POST-запросов

app.post('/api/call', async (req, res) => {
  const { name, phone, comment, agree } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Телефон и согласие с политикой обязательны' });
  }

  // Формируем текст сообщения для Telegram
  const message = `
Новая заявка с сайта schatz:
Имя: ${name || 'Не указано'}
Телефон: ${phone}
Комментарий: ${comment || 'Не указан'}
Согласие: Да
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description);
    }

    res.json({ success: true, message: 'Заявка успешно отправлена в Telegram' });
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    res.status(500).json({ message: 'Ошибка сервера при отправке сообщения в Telegram' });
  }
});


// УБРАН express.static, т.к. Vercel отдает public сам
// app.use(express.static(path.join(__dirname, '..', 'public')));

// Экспорт приложения для Vercel
module.exports = app;