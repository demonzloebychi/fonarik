// Находим кнопку и само лицо внутри SVG
const buttons = document.querySelectorAll('[data-open-popup="donation-popup"]')

buttons.forEach((button) => {
  const smileFace = button.querySelector(".donation__button-image")

  // Настраиваем быстрые функции GSAP для движения морды
  // elastic.out даст сочный «желейный» отскок, когда убираешь мышь
  const xTo = gsap.quickTo(smileFace, "x", {
    duration: 0.6,
    ease: "elastic.out(1, 0.4)",
  })
  const yTo = gsap.quickTo(smileFace, "y", {
    duration: 0.6,
    ease: "elastic.out(1, 0.4)",
  })

  // Когда мышка водится по кнопке
  button.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e
    const {height, width, left, top} = button.getBoundingClientRect()

    // Считаем положение мыши относительно центра кнопки
    // Множитель 0.3 задает максимальный ход лица.
    // Можешь поставить 0.5, если хочешь, чтобы морда тянулась еще сильнее к краям
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3

    // Двигаем только еблище внутри SVG
    xTo(x)
    yTo(y)
  })

  // Когда мышка ушла с кнопки — возвращаем морду в центр
  button.addEventListener("mouseleave", () => {
    xTo(0)
    yTo(0)
  })
})
