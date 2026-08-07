gsap.registerPlugin(ScrollTrigger);

const newsSections = document.querySelectorAll(".news-list");

newsSections.forEach((section) => {
  const gridContainer = section.querySelector("#news-container");
  const bgImg = section.querySelector(".news-list__background img");

  if (bgImg) {
    gsap.fromTo(bgImg, 
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }

  function initCardScrollAnimation(card) {
    if (card._hasScrollAnimation) return;
    card._hasScrollAnimation = true;

    gsap.fromTo(card,
      {
        opacity: 0,
        y: 100,
        scale: 0.85,
        rotationX: -15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 70%",
          scrub: 0.5,
          once: true
        }
      }
    );
  }

  const initialCards = section.querySelectorAll(".news-card");
  initialCards.forEach(card => initCardScrollAnimation(card));

  if (gridContainer) {
    const observer = new MutationObserver((mutations) => {
      let added = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              added = true;
              if (node.classList.contains("news-card")) {
                initCardScrollAnimation(node);
              } else {
                const nested = node.querySelectorAll(".news-card");
                nested.forEach(card => initCardScrollAnimation(card));
              }
            }
          });
        }
      });

      if (added) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    });

    observer.observe(gridContainer, { childList: true });
  }
});
