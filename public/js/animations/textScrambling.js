gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll('[data-animation="counter"]');

counters.forEach(amount => {
  const cleanedString = amount.textContent.replace(/\D/g, '');
  const finalNumber = parseInt(cleanedString, 10) || 0;

  const countObj = { value: 0 };

  gsap.to(countObj, {
    value: finalNumber,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: amount,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    },
    onUpdate: function() {
      amount.textContent = Math.floor(countObj.value).toLocaleString("ru-RU");
    }
  });
});
