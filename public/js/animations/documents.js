gsap.registerPlugin(ScrollTrigger);

const docsSections = document.querySelectorAll('[data-animation="docs-section"]');

docsSections.forEach((section) => {
  const gridContainer = section.querySelector('.docs__grid');
  
  if (gridContainer) gsap.set(gridContainer, { perspective: 1200 });

  function setupDocCardAnimation(card, index, useScrollTrigger = false) {
    const isRightColumn = index % 2 !== 0;

    // Сразу жестко прячем карточку и закручиваем её в 3D
    gsap.set(card, {
      opacity: 0,
      scale: 0.96,
      rotationY: isRightColumn ? 15 : -15,
      transformOrigin: isRightColumn ? "right center" : "left center"
    });

    const animationConfig = {
      opacity: 1,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "transform,opacity"
    };

    if (useScrollTrigger) {
      // Каждая стартовая карточка ждет своего личного появления на экране
      animationConfig.scrollTrigger = {
        trigger: card,
        start: "top bottom-=80px", // Раскроется, когда покажется на 80px снизу экрана
        once: true
      };
    }

    gsap.to(card, animationConfig);
  }

  // 1. Настройка стартовых карточек (каждая со своим триггером скролла)
  const initialCards = section.querySelectorAll('.docs__card');
  initialCards.forEach((card, index) => {
    setupDocCardAnimation(card, index, true);
  });

  // 2. Настройка подгружаемых по кнопке карточек
  if (gridContainer) {
    const observer = new MutationObserver((mutations) => {
      const newlyAddedDocs = [];

      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              if (node.classList.contains("docs__card")) {
                newlyAddedDocs.push(node);
              } else {
                const nested = node.querySelectorAll(".docs__card");
                if (nested.length) newlyAddedDocs.push(...nested);
              }
            }
          });
        }
      });

      if (newlyAddedDocs.length) {
        // Для новых карточек берем их текущий индекс в сетке, чтобы не ломать лево/право
        const allCards = section.querySelectorAll('.docs__card');
        
        newlyAddedDocs.forEach((card) => {
          const currentIndex = Array.from(allCards).indexOf(card);
          // Новые карточки раскрываются сразу при клике (без скроллтриггера)
          setupDocCardAnimation(card, currentIndex, false);
        });

        ScrollTrigger.refresh();
      }
    });

    observer.observe(gridContainer, { childList: true });
  }
});
