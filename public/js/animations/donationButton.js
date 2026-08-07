const buttons = document.querySelectorAll('[data-open-popup="donation-popup"]')

buttons.forEach((button) => {
  const smileFace = button.querySelector(".donation__button-image")

  const xTo = gsap.quickTo(smileFace, "x", {
    duration: 0.6,
    ease: "elastic.out(1, 0.4)",
  })
  const yTo = gsap.quickTo(smileFace, "y", {
    duration: 0.6,
    ease: "elastic.out(1, 0.4)",
  })

  button.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e
    const {height, width, left, top} = button.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3

    xTo(x)
    yTo(y)
  })

  button.addEventListener("mouseleave", () => {
    xTo(0)
    yTo(0)
  })
})
