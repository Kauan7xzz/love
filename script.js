// K ♥ G — interações
const messages = [
  "Você deixa meus dias mais bonitos. ❤️",
  "Meu coração escolhe você, hoje e sempre. 🎀",
  "K + G: duas letras que formam uma história linda. 💗",
  "Que nunca faltem carinho, respeito e risadas entre nós. ♡",
  "Se eu pudesse escolher de novo, escolheria viver momentos com você. ❤️"
];

const surpriseButton = document.querySelector("#surprise-button");
const surpriseMessage = document.querySelector("#surprise-message");

surpriseButton.addEventListener("click", () => {
  const previous = surpriseMessage.dataset.lastMessage;
  let nextMessage = messages[Math.floor(Math.random() * messages.length)];

  // Evita repetir a mesma mensagem em dois cliques seguidos.
  while (messages.length > 1 && nextMessage === previous) {
    nextMessage = messages[Math.floor(Math.random() * messages.length)];
  }

  surpriseMessage.textContent = nextMessage;
  surpriseMessage.dataset.lastMessage = nextMessage;
  surpriseMessage.classList.remove("message-pop");
  // Reinicia a animação sem depender de bibliotecas externas.
  void surpriseMessage.offsetWidth;
  surpriseMessage.classList.add("message-pop");
});

const heartsLayer = document.querySelector("#hearts-layer");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createFloatingHeart() {
  if (reducedMotion || !heartsLayer) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 15}px`;
  heart.style.setProperty("--drift", `${Math.random() * 90 - 45}px`);
  heart.style.animationDuration = `${7 + Math.random() * 5}s`;
  heartsLayer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

if (!reducedMotion) {
  window.setInterval(createFloatingHeart, 900);
}
