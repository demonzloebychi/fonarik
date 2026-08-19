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
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="23" viewBox="0 0 37 23" fill="none">
<g clip-path="url(#clip0_299_2937)">
<path d="M35.6196 -0.000365408C34.5563 5.00549 31.7529 8.70598 27.5576 11.4631C32.3252 13.9621 35.4533 17.7974 37 22.9958H36.7023C34.6955 22.9958 32.6887 22.9958 30.6858 22.9958C30.605 23.0071 30.523 22.987 30.4568 22.9397C30.3905 22.8923 30.3451 22.8214 30.33 22.7416C29.511 20.2176 27.8804 18.0322 25.69 16.5228C24.3353 15.5947 22.7752 15.0068 21.1429 14.8093C21.0578 14.8093 20.9689 14.8093 20.8606 14.7862V22.9573C20.8181 22.9732 20.774 22.9848 20.7291 22.9919C17.9316 23.0865 15.1409 22.6594 12.5009 21.7328C8.11997 20.1232 4.98025 17.1582 2.88452 13.0495C1.55034 10.3741 0.69336 7.48807 0.351865 4.52031C0.177866 3.11097 0.116 1.68622 0 0.269181C0 0.192168 0 0.115154 0 0.0188879H6.31811C6.31811 0.122856 6.31811 0.215272 6.31811 0.307688C6.35916 2.77217 6.74436 5.21899 7.46264 7.57774C8.08031 9.70563 9.17502 11.6661 10.6642 13.3114C11.7045 14.4631 13.0277 15.3256 14.5038 15.8143C14.6198 15.8528 14.7358 15.8798 14.8905 15.9183V0.0227386H20.849V9.1103C21.1777 9.04099 21.4715 8.99863 21.7538 8.92162C23.0368 8.55235 24.217 7.89352 25.2028 6.99629C27.2511 5.20739 28.7542 2.88201 29.5412 0.284584C29.5564 0.196648 29.6051 0.117948 29.6772 0.0648688C29.7492 0.0117899 29.839 -0.0115767 29.9279 -0.000365408C31.7066 -0.000365408 33.5045 -0.000365408 35.2832 -0.000365408H35.6196Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_299_2937">
<rect width="37" height="23" fill="white"/>
</clipPath>
</defs>
</svg>`
    },
    {
      title: "tg",
      url: "/tg",
      image: "/img/svg/tg.svg",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none">
<g clip-path="url(#clip0_299_2940)">
<path d="M36.0004 2.34577C35.8048 3.7838 35.6272 5.22442 35.4109 6.659C34.5609 12.3017 33.7043 17.9444 32.8412 23.5872C32.679 24.6521 32.5649 25.7274 32.3478 26.7828C32.2164 27.4296 31.9976 28.0553 31.6974 28.6423C31.1054 29.7789 30.1127 30.2479 28.8934 29.8808C28.0196 29.6187 27.1874 29.2322 26.4223 28.733C23.173 26.5841 19.9606 24.3826 16.7413 22.1966C15.3161 21.2276 15.1591 19.9148 16.3749 18.691C17.4337 17.6234 18.5749 16.638 19.6637 15.6007C21.8728 13.495 24.0751 11.3828 26.2704 9.26387C26.5064 9.03585 26.7569 8.79402 26.8994 8.50728C26.9537 8.39159 26.9845 8.26616 26.9901 8.13834C26.9957 8.01051 26.976 7.88284 26.932 7.76279C26.8067 7.49245 26.4832 7.47863 26.2121 7.6056C25.9661 7.72022 25.7297 7.85452 25.5051 8.00721C21.6346 10.6656 17.7735 13.3387 13.8926 15.9825C12.961 16.6217 11.9923 17.2042 10.9917 17.7271C9.83161 18.3317 8.61322 18.393 7.33306 17.9991C5.59899 17.4671 3.8289 17.0543 2.08282 16.5603C1.58745 16.4216 1.11041 16.2235 0.661939 15.9704C-0.126582 15.5212 -0.230403 14.7698 0.445718 14.1653C0.888348 13.7801 1.38876 13.4679 1.92838 13.2403C9.9606 9.7648 17.9983 6.30144 26.0413 2.85016C27.947 2.03485 29.8733 1.26703 31.8047 0.51822C32.4128 0.269522 33.0505 0.101704 33.7018 0.0190119C35.0746 -0.126087 35.8322 0.569177 35.9421 1.95107C35.9524 2.07976 35.9421 2.21017 35.9421 2.33973L36.0004 2.34577Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_299_2940">
<rect width="36" height="30" fill="white"/>
</clipPath>
</defs>
</svg>`,
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
