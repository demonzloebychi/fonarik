gsap.registerPlugin(ScrollTrigger, SplitText);

const partnersSection = document.querySelector(".partners");

if (partnersSection) {
  const title = partnersSection.querySelector(".partners__title");
  const partnerItems = partnersSection.querySelectorAll(".partners__item");

  const splitTitle = new SplitText(title, {
    type: "chars, words",
    ignore: "span, a, img, svg"
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: partnersSection,
      start: "top 80%", 
      toggleActions: "play none none reverse"
    }
  });

  if (splitTitle.chars.length > 0) {
    tl.from(splitTitle.chars, {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out"
    });
  }

  if (partnerItems.length > 0) {
    partnerItems.forEach((item) => {
      gsap.set(item, {
        opacity: 0,
        y: -50,
        skewX: Math.random() * 20 - 10
      });
    });

    tl.to(partnerItems, {
      opacity: 1,
      y: 0,
      skewX: 0,
      duration: 0.45,
      ease: "circ.out",
      stagger: 0.04,
      clearProps: "transform" 
    }, "-=0.3");
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}
