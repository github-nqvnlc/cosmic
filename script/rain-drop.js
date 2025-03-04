document.addEventListener("DOMContentLoaded", function () {
  const particleSettings = {
    numParticles: 15,
    particleRadius: 40,
    particleSize: 6,
    interval: 2000,
    yOffset: 10,
    fallSpeed: 2,
  };

  function createParticles(x, y) {
    const container = document.getElementById("effectContainer");
    for (let i = 0; i < particleSettings.numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.setProperty(
        "--particle-size",
        `${particleSettings.particleSize}px`
      );
      container.appendChild(particle);

      const angle = Math.random() * Math.PI;
      const distance = Math.random() * particleSettings.particleRadius;
      const offsetX = Math.cos(angle) * distance;
      const offsetY = -Math.sin(angle) * distance;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      requestAnimationFrame(() => {
        particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        particle.style.opacity = "0";
      });

      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }

  function createRaindrop() {
    const container = document.getElementById("effectContainer");
    const rect = container.getBoundingClientRect();
    const randomX = Math.random() * rect.width;
    const impactY = rect.height - particleSettings.yOffset;

    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    container.appendChild(raindrop);

    raindrop.style.left = `${randomX}px`;
    raindrop.style.top = `-10px`;

    raindrop.animate(
      [
        { transform: "translateY(0px)" },
        { transform: `translateY(${impactY}px)` },
      ],
      { duration: particleSettings.fallSpeed * 1000, easing: "linear" }
    );

    setTimeout(() => {
      createParticles(randomX, impactY);
      raindrop.remove();
    }, particleSettings.fallSpeed * 1000);
  }

  setInterval(createRaindrop, particleSettings.interval);
});
