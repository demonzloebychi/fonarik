gsap.registerPlugin(ScrollTrigger);

const teamSections = document.querySelectorAll('[data-animation="team"]');

teamSections.forEach(section => {
  const cards = section.querySelectorAll('[data-team-card]');
  const slider = section.querySelector('.team__slider');

  if (cards.length) {
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        rotationZ: -3,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        rotationZ: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: slider || section,
          start: "top bottom-=300px", // Сделали запуск сильно позже (300px от низа экрана)
          toggleActions: "play none none reverse",
          once: true
        },
        onComplete: () => {
          // Вместо "all" чистим только конкретные свойства, чтобы убрать мигание картинок
          cards.forEach(card => gsap.set(card, { clearProps: "transform,opacity" }));
        }
      }
    );

    cards.forEach(card => {
      const img = card.querySelector('.team__card-image-ibg img');
      const body = card.querySelector('.team__card-body');

      card.addEventListener('mouseenter', () => {
        if (img) gsap.to(img, { scale: 1.06, duration: 0.4, ease: "power2.out" });
        if (body) gsap.to(body, { y: -5, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener('mouseleave', () => {
        if (img) gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
        if (body) gsap.to(body, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }
});
