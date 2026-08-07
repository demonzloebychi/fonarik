gsap.registerPlugin(ScrollTrigger);

const fadeScaleElements = document.querySelectorAll('[data-animation="fade-scale"]');

fadeScaleElements.forEach(target => {
  gsap.from(target, {
    opacity: 0,
    scale: 1.1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    }
  });
});
