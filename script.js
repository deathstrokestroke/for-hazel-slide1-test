// Slide system
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 9000);

// Floating hearts on Slide 2
const heartsContainer = document.querySelector('.hearts-container');

for (let i = 0; i < 15; i++) {
  let heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 95 + 'vw';
  heart.style.top = -10 + 'vh';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.style.animation = `heartFall ${5 + Math.random() * 5}s linear infinite`;

  heartsContainer.appendChild(heart);
}

// Hearts animation keyframes dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes heartFall {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(120vh); opacity: 0; }
}`;
document.head.appendChild(style);
