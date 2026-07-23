const fs = require('fs');
const path = require('path');

// Описываем, какие файлы из node_modules нужно скопировать в public/libs/
const assets = [
  { from: 'node_modules/swiper/swiper-bundle.min.js', to: 'public/libs/swiper/swiper.min.js' },
  { from: 'node_modules/swiper/swiper-bundle.min.css', to: 'public/libs/swiper/swiper.min.css' },
];

assets.forEach(asset => {
  if (fs.existsSync(asset.from)) {
    const destDir = path.dirname(asset.to);
    
    // Создаем папки, если их еще нет
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Копируем файл
    fs.copyFileSync(asset.from, asset.to);
    console.log(`✓ Скопировано: ${asset.to}`);
  } else {
    console.warn(`⚠ Файл не найден: ${asset.from}. Сначала запустите npm install.`);
  }
});
