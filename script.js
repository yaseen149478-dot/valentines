const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const question = document.querySelector("h1");

function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  // Change text
  question.innerText = "Yaa! You’re my Valentine 💖";

  // Change background
  document.body.classList.add("yes-mode");

  // Show result
  result.style.display = "block";

  // Remove buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Start confetti
  startHearts();
});

function startHearts() {
  for (let i = 0; i < 40; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}