const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickCount = 0;
let isIncreasing = true;
const baseSize = 200; // Базовый размер печеньки (из атрибута width)
const scaleFactor = 0.95; // Коэффициент масштабирования при клике

cookie.addEventListener('click', () => {
  clickCount++;
  counter.textContent = clickCount;

  if (isIncreasing) {
    cookie.style.width = `${baseSize * scaleFactor}px`;
  } else {
    cookie.style.width = `${baseSize}px`;
  }

  isIncreasing = !isIncreasing; // Инвертируем состояние для следующего клика
});