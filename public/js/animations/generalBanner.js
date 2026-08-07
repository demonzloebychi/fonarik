const generalBanners = document.querySelectorAll('[data-animation="general-banner"]');

generalBanners.forEach(banner => {
  const bg = banner.querySelector('[data-banner-bg]');
  const formWrapper = banner.querySelector('[data-banner-form]');

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  // 1. Быстрый наплыв фона
  if (bg) {
    tl.fromTo(bg,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.1 },
      0
    );
  }

  // 2. Ультра-быстрое выкатывание формы (задержка уменьшена, вылетает сразу)
  if (formWrapper) {
    tl.fromTo(formWrapper,
      { opacity: 0, x: 10, scale: 0.97 },
      { 
        opacity: 1, 
        x: 0, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.5)" 
      },
      "-=0.9" // Форма вылетает почти мгновенно, через 0.2 сек после старта анимации фона
    );
  }
});
