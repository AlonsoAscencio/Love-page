const container = document.getElementById("flowers");

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";

  const emojis = ["🌸", "🌷", "🌹", "💮"];
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (5 + Math.random() * 5) + "s";
  flower.style.fontSize = (20 + Math.random() * 20) + "px";

  container.appendChild(flower);

  setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 600);
