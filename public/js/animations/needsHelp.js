gsap.registerPlugin(ScrollTrigger, SplitText);

const animationSections = document.querySelectorAll('[data-animation="fade-up-cards"]');

animationSections.forEach(section => {
  const gridContainer = section.querySelector('[data-animation-grid]');
  const bgImg = section.querySelector('.needs-help__background img, .help-section__background img');

  // Храним количество уже анимированных карточек для этой секции
  let animatedCount = 0;

  if (bgImg) {
    gsap.fromTo(bgImg, 
      { yPercent: -10 },
      {
        yPercent: 10,
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

  // Твоя оригинальная сочная анимация, изменены только входящие карточки
  function animateCards(cards) {
    if (!cards.length) return;

    gsap.fromTo(cards, 
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        onComplete: function() {
          cards.forEach(card => {
            gsap.set(card, { clearProps: "transform,opacity,scale" });
          });
        }
      }
    );

    cards.forEach((card, index) => {
      const name = card.querySelector(".child-card__name");
      const age = card.querySelector(".child-card__age");
      const diagnosis = card.querySelector(".child-card__diagnosis");
      const barFill = card.querySelector(".child-card__bar-fill");

      const elementsToSplit = [name, age, diagnosis].filter(Boolean);
      const delay = index * 0.1 + 0.1; 

      if (elementsToSplit.length) {
        const split = new SplitText(elementsToSplit, {
          type: "lines",
          mask: "lines"
        });

        gsap.from(split.lines, {
          y: "100%",
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          delay: delay
        });
      }

      if (barFill) {
        const targetWidth = barFill.style.width || "0%";
        gsap.fromTo(barFill, 
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.1,
            ease: "power2.out",
            delay: delay
          }
        );
      }
    });
  }

  // Первый запуск при скролле (сделали старт пониже, чтобы человек точно увидел)
  ScrollTrigger.create({
    trigger: gridContainer || section,
    start: "top 95%", // Запуск позже, когда сам грид с карточками зайдет в экран
    toggleActions: "play none none reverse",
    onEnter: () => {
      if (!section.classList.contains('is-animated')) {
        section.classList.add('is-animated');
        const initialCards = section.querySelectorAll('.child-card');
        
        if (initialCards.length) {
          animatedCount = initialCards.length; // Запоминаем, сколько карточек анимировали
          animateCards(Array.from(initialCards));
        }
      }
    }
  });

  // Отслеживание клика и подгрузки
  if (gridContainer) {
    const observer = new MutationObserver(() => {
      const allCards = section.querySelectorAll('.child-card');
      
      // Если общее количество карточек стало больше, чем мы уже анимировали
      if (allCards.length > animatedCount) {
        // Срезаем массив: берем только новые карточки, начиная с индекса animatedCount
        const newCards = Array.from(allCards).slice(animatedCount);
        
        // Обновляем счетчик подгруженных
        animatedCount = allCards.length;

        // Анимируем строго новые карточки
        if (newCards.length) {
          animateCards(newCards);
          ScrollTrigger.refresh();
        }
      }
    });

    observer.observe(gridContainer, { childList: true, subtree: true });
  }
});
