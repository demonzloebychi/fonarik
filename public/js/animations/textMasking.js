gsap.registerPlugin(ScrollTrigger, SplitText);

const textTargets = document.querySelectorAll('[data-animation="text-mask"]');

textTargets.forEach(target => {
  const split = new SplitText(target, {
    type: "lines",
    mask: "lines"
  });

  gsap.from(split.lines, {
    y: "100%",
    duration: 0.8,
    stagger: 0.06,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    }
  });
});
