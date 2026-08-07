// 1. Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const statsSection = document.querySelector(".stats-banner");

if (statsSection) {
  const label = statsSection.querySelector(".stats-banner__label");
  const amount = statsSection.querySelector(".stats-banner__amount");
  const description = statsSection.querySelector(".stats-banner__description");


  const finalAmountText = amount.textContent.trim();

  amount.textContent = "0 000 000";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: statsSection,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // ЭТАП 1: Выкатываем верхний ярлык
  tl.from(label, {
    y: "100%",
    duration: 0.8,
    ease: "power3.out"
  });

  // ЭТАП 2: Запускаем скрамбл-эффект
  tl.to(amount, {
    duration: 2,
    scrambleText: {
      text: finalAmountText, // Подставляем динамический текст из HTML
      chars: "0123456789",   // Перебираем только цифры
      revealDelay: 0.3,
      speed: 0.4
    },
    ease: "power2.out"
  }, "-=0.4");

  // ЭТАП 3: Выкатываем описание
  tl.from(description, {
    y: "100%",
    duration: 0.8,
    ease: "power3.out"
  }, "-=1.5");
}
