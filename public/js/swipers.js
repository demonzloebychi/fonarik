const initHelpSlider = () => {
  const sliderEl = document.querySelector('.JS-help-slider');

  if (!sliderEl) return;

  // Используем глобальный Swiper без ES6-импортов
  const helpSwiper = new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
};

document.addEventListener('DOMContentLoaded', initHelpSlider);