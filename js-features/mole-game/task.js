const holes = document.querySelectorAll('.hole');
const scoreElement = document.getElementById('dead'); // Пример ID для счетчика побед
const failsElement = document.getElementById('lost'); // Пример ID для счетчика поражений
let score = 0;
let fails = 0;

function moveMole() {
    // Эта функция уже должна быть определена в вашем подключенном скрипте
    // Она отвечает за удаление класса 'hole_has-mole' у текущей ячейки
    // и добавление его к случайной другой ячейке.
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            score++;
            scoreElement.textContent = score;
        } else {
            fails++;
            failsElement.textContent = fails;
        }

        // Запускаем перемещение крота после каждого клика
        moveMole();

        // Проверка условий победы/поражения и сброс игры (примерно)
        if (score >= 10) {
            alert('Победа!');
            score = 0;
            fails = 0;
            scoreElement.textContent = score;
            failsElement.textContent = fails;
            // Возможно, перезапустить игру
        } else if (fails >= 5) {
            alert('Поражение!');
            score = 0;
            fails = 0;
            scoreElement.textContent = score;
            failsElement.textContent = fails;
            // Возможно, перезапустить игру
        }
    });
});

// Начальное размещение крота при загрузке страницы (если необходимо)
moveMole();