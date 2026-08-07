// 1. Регистрируем плагины для этого файла
gsap.registerPlugin(ScrollTrigger, SplitText);

// 2. Находим секцию
const quoteSection = document.querySelector(".quote-section");

// 3. Если она есть на странице — запускаем всю магию внутри if
if (quoteSection) {
  const splitQuote = new SplitText(".quote-section__quote", { 
    type: "lines", 
    mask: "lines" 
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: quoteSection,
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  });

  tl.from(splitQuote.lines, {
    y: "100%",
    duration: 1,
    ease: "power4.out",
    stagger: 0.1
  })
  .from([".quote-section__author-name", ".quote-section__text"], {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1
  }, "-=0.6")
  .from(".quote-section__person-img", {
    scale: 1.1,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=0.8");
}
