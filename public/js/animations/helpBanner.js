gsap.registerPlugin(ScrollTrigger);

const helpBanners = document.querySelectorAll('[data-animation="help-banner"]');

helpBanners.forEach(banner => {
  const gallery = banner.querySelector('[data-banner-gallery]');
  const bgGradient = banner.querySelector('.help-banner__gradient-bg');

  if (!gallery) return;

  const sun = gallery.querySelector('.help-banner__sun');
  const cardLeft = gallery.querySelector('.help-banner__card--left');
  const cardRight = gallery.querySelector('.help-banner__card--right');

  // 1. Мягкий параллакс фонового градиента за колесиком мыши
  if (bgGradient) {
    gsap.fromTo(bgGradient,
      { yPercent: -8, scale: 1.05 },
      {
        yPercent: 8,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }

  // 2. Таймлайн для эффектного раскрытия элементов галереи
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: gallery,
      start: "top bottom-=150px", // Анимация начнется, когда галерея зайдет на 150px в экран
      toggleActions: "play none none reverse",
      once: true
    }
  });

  // Шаг А: Солнышко вылетает из нуля, масштабируется и закручивается
  if (sun) {
    tl.fromTo(sun,
      { opacity: 0, scale: 0, rotation: -90 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: "back.out(1.5)" }
    );
  }

  // Шаг Б: Левая карточка вылетает со сдвигом влево и наклоном
  if (cardLeft) {
    tl.fromTo(cardLeft,
      { opacity: 0, x: 50, y: 30, rotation: 5, scale: 0.9 },
      { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 0.7, ease: "power3.out" },
      "-=0.6" // Перекрываем анимацию, чтобы карточки вылетали одновременно с раскрытием солнца
    );
  }

  // Шаг В: Правая карточка вылетает со сдвигом вправо и противоположным наклоном
  if (cardRight) {
    tl.fromTo(cardRight,
      { opacity: 0, x: -50, y: 30, rotation: -5, scale: 0.9 },
      { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 0.7, ease: "power3.out" },
      "-=0.7"
    );
  }
});
