gsap.registerPlugin(ScrollTrigger);

const fadeUpElements = document.querySelectorAll('[data-animation="fade-up"]');

fadeUpElements.forEach(target => {
  gsap.from(target, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    }
  });
});
