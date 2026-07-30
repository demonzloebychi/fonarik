const fakeData = require('./fakeData');

module.exports = {
  navigation: [
    {
      title: 'О фонде',
      url: '/about/',
    },
    {
      title: 'Нужна помощь',
      url: '/weHelp/',
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
      url: '/weHelp/',
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


  children: [
      {
        id: 1,
        name: "Петров Сергей",
        age: "12 лет",
        image: "/img/children/sergey.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "462 379 руб.",
        progressPercent: 45,
        url: "/stories/petrov-sergey",
      },
      {
        id: 2,
        name: "Миронова Евгения",
        age: "12 лет",
        image: "/img/children/evgeniya.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "462 379 руб.",
        progressPercent: 30,
        url: "/stories/mironova-evgeniya",
      },
      {
        id: 3,
        name: "Максимов Константин",
        age: "12 лет",
        image: "/img/children/maksimov.png",
        diagnosis: "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "462 379 руб.",
        progressPercent: 45,
        url: "/stories/ivanov-alexey"
      },
      {
        id: 4,
        name: "Смирнова Анна",
        age: "5 лет",
        image: "/img/children/maksimov.png",
        diagnosis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "850 000 руб.",
        progressPercent: 15,
        url: "/stories/smirnova-anna"
      },
      {
        id: 5,
        name: "Петров Сергей",
        age: "12 лет",
        image: "/img/children/sergey.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "462 379 руб.",
        progressPercent: 45,
        url: "/stories/petrov-sergey",
      },
      {
        id: 6,
        name: "Миронова Евгения",
        age: "12 лет",
        image: "/img/children/evgeniya.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "462 379 руб.",
        progressPercent: 30,
        url: "/stories/mironova-evgeniya",
      },
      {
        id: 7,
        name: "Иванов Алексей",
        age: "8 лет",
        image: "/img/children/evgeniya.png",
        diagnosis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "120 000 руб.",
        progressPercent: 70,
        url: "/stories/ivanov-alexey"
      },

        {
        id: 8,
        name: "Петров Сергей",
        age: "12 лет",
        image: "/img/children/child1.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "0 руб.",
        progressPercent: 100,
        url: "/stories/petrov-sergey",
        youHelped: true,
      },
      {
        id: 9,
        name: "Миронова Евгения",
        age: "12 лет",
        image: "/img/children/child2.png",
        diagnosis:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "0 руб.",
        progressPercent: 100,
        url: "/stories/mironova-evgeniya",
        youHelped: true,

      },
      {
        id: 10,
        name: "Максимов Константин",
        age: "12 лет",
        image: "/img/children/child3.png",
        diagnosis: "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "0 руб.",
        progressPercent: 100,
        url: "/stories/ivanov-alexey",
        youHelped: true,

      },
      {
        id: 11,
        name: "Смирнова Анна",
        age: "5 лет",
        image: "/img/children/child1.png",
        diagnosis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "0 руб.",
        progressPercent: 100,
        url: "/stories/smirnova-anna",
        youHelped: true,

      },
      {
        id: 12,
        name: "Максимов Константин",
        age: "12 лет",
        image: "/img/children/child3.png",
        diagnosis: "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        targetAmount: "0 руб.",
        progressPercent: 100,
        url: "/stories/ivanov-alexey",
        youHelped: true,

      },
    ],



//   advantages: fakeData.index.advantages,

//   catalog: fakeData.index.catalog,


  // Добавьте другие общие блоки, если нужно
};