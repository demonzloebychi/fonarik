const fakeData = require('./fakeData');

module.exports = {
  navigation: [
    {
      title: 'О фонде',
      url: '/about/',
    },
    {
      title: 'Нужна помощь',
      url: '/we-help/',
    },
    // {
    //   title: 'Качество',
    //   childrens: [
    //     {
    //       title: 'Политика Качества',
    //       url: '/policy',
    //     },
    //     {
    //       title: 'Гарантия Качества',
    //       url: '/quality',
    //     },
    //   ]
    // },
    {
      title: 'Вы помогли',
      url: '/we-help/',
    },
    {
      title: 'Отчеты',
      url: '/reports/',
    },
    {
      title: 'Новости',
      url: '/news/',
    },
  ],


  navigationFooter: [
    {
      title: 'О фонде',
      url: '/about/',
    },
    {
      title: 'Нужна помощь',
      url: '/need-help/',
    },
    {
      title: 'Вы помогли',
      url: '/we-help/',
    },
    {
      title: 'Отчеты',
      url: '/reports/',
    },
    {
      title: 'Новости',
      url: '/news/',
    },
  ],

  navigationFooterAdvanced: [
    {
      title: 'Политика обработки персональных данных',
      url: '/policy/'
    },
    {
      title: 'Публичная оферта о заключении договора пожертвования',
      url: '/ofetra/'
    },
  ],

  contacts: [
    {
        title: '+7 912 345 67 89',
        url: 'tel:+7 912 345 67 89',
    },
    {
        title: 'mail@fonarik.ru',
        url: 'mailto:mail@fonarik.ru',
    },
  ],


  socials: [
    {
        title: 'vk',
        url: '/vk',
        image: '/img/svg/vk.svg',
    },
    {
        title: 'tg',
        url: '/tg',
        image: '/img/svg/tg.svg',
    },
  ],




//   advantages: fakeData.index.advantages,

//   catalog: fakeData.index.catalog,


  // Добавьте другие общие блоки, если нужно
};