const initHelpSlider = () => {
  const sliderEl = document.querySelector(".JS-help-slider")
  if (!sliderEl) return

  // Для этого слайдера стрелки, вероятно, внутри
  const nextEl = sliderEl.querySelector(".swiper-button-next")
  const prevEl = sliderEl.querySelector(".swiper-button-prev")

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: { nextEl, prevEl },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  })
}

const initTeamSlider = () => {
  const sliderEl = document.querySelector(".team__slider")
  if (!sliderEl) return

  // Поднимаемся до блока .team, чтобы найти стрелки в .team__header
  const blockEl = sliderEl.closest(".team") || document
  const nextEl = blockEl.querySelector(".team__arrow--next")
  const prevEl = blockEl.querySelector(".team__arrow--prev")

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: { nextEl, prevEl },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  })
}

document.addEventListener("DOMContentLoaded", () => {
  initHelpSlider()
  initTeamSlider()
})