const mainBanners = document.querySelectorAll('[data-animation="main-banner"]');

mainBanners.forEach(banner => {
  const bg = banner.querySelector('[data-main-bg]');
  const logo = banner.querySelector('[data-main-logo]');

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  if (bg) {
    tl.fromTo(bg,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2 },
      0
    );
  }

  if (logo) {
    tl.fromTo(logo,
      { opacity: 0, y: -50, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.5)" 
      },
      "-=0.9"
    );
  }
});
