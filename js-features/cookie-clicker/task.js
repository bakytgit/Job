const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickCount = 0; // Инициализируем счетчик

cookie.addEventListener('click', () => {
    cookie.style.width = (++clickCount % 2) ? '210px' : '200px'; // Изменяем размер
    counter.textContent = clickCount; // Обновляем счетчик
});
