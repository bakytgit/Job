// base.js (содержимое этого файла вам уже было предоставлено ранее)
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index + 1}`);
}

// task.js (добавленный код)
function startGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = deadCount;
    lost.textContent = lostCount;

    let gameInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * holes.length);
        const activeHole = getHole(randomIndex);

        if (!activeHole.classList.contains('hole_has-mole')) {
            activeHole.classList.add('hole_has-mole');

            let moleTimeout = setTimeout(() => {
                activeHole.classList.remove('hole_has-mole');
            }, 1000); // Крот показывается на 1 секунду (можно настроить)

            activeHole.onclick = function() {
                if (activeHole.classList.contains('hole_has-mole')) {
                    deadCount++;
                    dead.textContent = deadCount;
                    activeHole.classList.remove('hole_has-mole');
                    clearTimeout(moleTimeout); // Предотвращаем скрытие при клике
                } else {
                    lostCount++;
                    lost.textContent = lostCount;
                }

                if (deadCount === 10) {
                    alert('Победа! Вы убили 10 кротов.');
                    clearInterval(gameInterval);
                    holes.forEach(hole => hole.onclick = null); // Отключаем обработчики
                    startGame(); // Начать новую игру
                }

                if (lostCount === 5) {
                    alert('Поражение! Вы пропустили 5 кротов.');
                    clearInterval(gameInterval);
                    holes.forEach(hole => hole.onclick = null); // Отключаем обработчики
                    startGame(); // Начать новую игру
                }
            };
        }
    }, 1500); // Интервал появления крота (можно настроить)
}

// Запускаем игру при загрузке страницы
startGame();