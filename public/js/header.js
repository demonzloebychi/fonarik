const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header__menu-mobile');
const body = document.querySelector('body')

headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock')
//   const isActive = headerBurger.classList.contains('active');

//   toggleBodyScroll(isActive);
});



// const mobileScreen = window.matchMedia("media and (max-width: 992px)")
const headerItems = document.querySelectorAll('.header-menu__item')

headerItems.forEach( headerItem => {
  headerItem.addEventListener('click', function() {
    headerItem.classList.toggle('active')
  })
})










// const header = document.querySelector('.header');
// const headerForms = document.querySelector('.header-forms');

// function updateHeaderHeight() {
//   const headerRect = header.getBoundingClientRect();
//   const headerFormsRect = headerForms.getBoundingClientRect();
//   const totalHeaderHeight = headerRect.height + headerFormsRect.height;
//   document.documentElement.style.setProperty('--header-total-height', `${totalHeaderHeight}px`);
// }

// // Выполнить при загрузке страницы
// updateHeaderHeight();

// // Выполнить при изменении размера окна
// window.addEventListener('resize', updateHeaderHeight);

