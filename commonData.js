const fakeData = require("./fakeData")

module.exports = {
  navigation: [
    {
      title: "О фонде",
      url: "/about/",
    },
    {
      title: "Нужна помощь",
      url: "/weHelp/",
    },
    {
      title: "Вы помогли",
      url: "/youHelped/",
    },
    {
      title: "Помочь",
      url: "/help/",
    },
    {
      title: "Отчеты",
      url: "/reports/",
    },
    {
      title: "Новости",
      url: "/news/",
    },
  ],

  navigationFooter: [
    {
      title: "О фонде",
      url: "/about/",
    },
    {
      title: "Нужна помощь",
      url: "/weHelp/",
    },
    {
      title: "Вы помогли",
      url: "/youHelped/",
    },
    {
      title: "Помочь",
      url: "/help/",
    },
    {
      title: "Отчеты",
      url: "/reports/",
    },
    {
      title: "Новости",
      url: "/news/",
    },
  ],

  navigationFooterAdvanced: [
    {
      title: "Политика обработки персональных данных",
      url: "/policy/",
    },
    {
      title: "Публичная оферта о заключении договора пожертвования",
      url: "/ofetra/",
    },
  ],

  contacts: [
    {
      title: "+7 912 345 67 89",
      url: "tel:+7 912 345 67 89",
    },
    {
      title: "mail@fonarik.ru",
      url: "mailto:mail@fonarik.ru",
    },
  ],

  socials: [
    {
      title: "vk",
      url: "/vk",
      image: "/img/svg/vk.svg",
    },
    {
      title: "tg",
      url: "/tg",
      image: "/img/svg/tg.svg",
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
      diagnosis:
        "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      targetAmount: "462 379 руб.",
      progressPercent: 45,
      url: "/stories/ivanov-alexey",
    },
    {
      id: 4,
      name: "Смирнова Анна",
      age: "5 лет",
      image: "/img/children/maksimov.png",
      diagnosis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      targetAmount: "850 000 руб.",
      progressPercent: 15,
      url: "/stories/smirnova-anna",
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
      diagnosis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      targetAmount: "120 000 руб.",
      progressPercent: 70,
      url: "/stories/ivanov-alexey",
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
      diagnosis:
        "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      diagnosis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      diagnosis:
        "Диагноз ребенка: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      targetAmount: "0 руб.",
      progressPercent: 100,
      url: "/stories/ivanov-alexey",
      youHelped: true,
    },
    {
      id: 13,
      name: "Николь",
      age: "8 лет",
      image: "/img/children/nikol/2.jpg",
      diagnosis:
        "Диагноз ребёнка: spina bifida (врождённый порок развития позвоночника)",
      targetAmount: "0 руб.",
      progressPercent: 100,
      url: "/stories/nikol",
      youHelped: true,
      descriptionOne: [
        `Николь восемь лет. После школы она спешит не домой, а на танцы. Несколько лет назад они стали частью её реабилитации: помогают укреплять руки, спину, корпус. Но со временем танцы превратились в настоящее увлечение. В этом году Николь выступила на Кубке России по танцам на колясках и теперь мечтает однажды стать чемпионкой.`,
        `У Николь spina bifida – врождённый порок развития позвоночника. В России такой диагноз встречается примерно у 1–3 новорождённых из 10 тысяч. Девочка передвигается на инвалидной коляске, но старая коляска стала ей мала. Передвигаться в ней всё труднее, а зимой в тёплой одежде и вовсе будет невозможно.`,
      ],
      descriptionTwo: [
        `Николь учится в обычной школе, часто ездит на тренировки и реабилитацию в Казань. Для любого ребёнка важно чувствовать себя самостоятельным: самому доехать до класса, свободно передвигаться по школе, не ждать помощи там, где можно справиться самому. Лёгкая и манёвренная коляска iCross поможет девочке быть активнее, увереннее в себе и свободнее в повседневной жизни.`,
        `«Благодаря танцам у Николь появился стимул в жизни. Она стала увереннее в себе, получает огромное удовольствие от занятий и просто живёт танцами. Лёгкая активная коляска станет для неё большим помощником в повседневной жизни и позволит продолжать заниматься любимым делом», — рассказывает Ирина, мама Николь.`,
        `Поддержите сбор для Николь. Вместе мы поможем ей сохранить самое важное: возможность двигаться, учиться, танцевать и с каждым днём становиться всё более уверенной и самостоятельной.`,
      ],
      mainImage: "/img/children/nikol/1.jpg",
    },
  ],

  docs: [
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
  ],

  reports: [
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Годовой отчет",
      meta: "PDF (1.9 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчет в Министерство Юстиций",
      meta: "PDF (11.2 мб)",
      fileUrl: "#",
    },
    {
      title: "Аудиторское заключение",
      meta: "PDF (4.4 мб)",
      fileUrl: "#",
    },
    {
      title: "Отчёт о полученных средствах",
      meta: "PDF (7.9 мб)",
      fileUrl: "#",
    },
  ],

  newsData: [
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/1.png",
      link: "/singleNews/",
      topic: 'Название темы статьи',
      htmlContent: `
      <h2>Главная мысль статьи, возможно описание в несколько строк</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <img src="/img/news/kids-1.png" alt="Дети">

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesettin</li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesettin</li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesettin</li>
      </ul>

      <h3>Подзаголовок статьи, возможно длинное написание в несколько строк</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <!-- Видео блок -->
      <div class="video-wrapper">
        <img src="/img/news/kids-2.png" alt="Превью видео">
        <a href="https://youtube.com/watch?v=..." aria-label="Смотреть видео"></a>
      </div>

      <!-- Кнопка помощи в конце или в любом месте статьи -->
      <a href="/donate" class="button-help">Помочь</a>
    `
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/2.png",
      link: "#",
      
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/3.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/4.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/5.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/6.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/1.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/2.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/3.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/4.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/5.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/6.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/1.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/2.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/3.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/4.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/5.png",
      link: "#",
    },
    {
      date: "21.01.26",
      datetime: "2026-01-21",
      title:
        "«Каждый ребенок заслуживает заботу»: фонд провел семейный праздник для детей",
      image: "/img/news/6.png",
      link: "#",
    },
  ],
  //   advantages: fakeData.index.advantages,

  //   catalog: fakeData.index.catalog,
}
