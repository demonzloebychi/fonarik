document.addEventListener("DOMContentLoaded", () => {
  const sun = document.querySelector(".cursor-sun");
  const face = document.querySelector(".sun-face");

  if (!sun || !face) return;

  // Плавное следование самого солнца
  const sunX = gsap.quickTo(sun, "x", { duration: 0.35, ease: "power2.out" });
  const sunY = gsap.quickTo(sun, "y", { duration: 0.35, ease: "power2.out" });

  // Движение лица внутри круга
  const faceX = gsap.quickTo(face, "x", { duration: 0.2, ease: "power1.out" });
  const faceY = gsap.quickTo(face, "y", { duration: 0.2, ease: "power1.out" });

  window.addEventListener("mousemove", (e) => {
    sunX(e.clientX);
    sunY(e.clientY);

    // Вычисляем положение курсора относительно центра экрана (от -1 до 1)
    const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    // Смещаем лицо максимум на 14px в сторону взгляда
    faceX(normX * 24);
    faceY(normY * 24);
  });

  
});
