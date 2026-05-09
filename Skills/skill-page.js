document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".meter").forEach((meter) => {
    requestAnimationFrame(() => meter.classList.add("is-visible"));
  });

  document.querySelectorAll(".content-card, .hero-card, .score-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
      card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
