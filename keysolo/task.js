const wordElement = document.querySelector('.word');
const winsElement = document.querySelector('.status__wins');
const lossElement = document.querySelector('.status__loss');

let currentWord = '';
let currentLetterIndex = 0;
let wins = 0;
let losses = 0;
const words = ['Кот', 'Дом', 'Солнце', 'Весна', 'Игра', 'Мир', 'Свет', 'Ночь', 'Город', 'Река'];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

function renderWord() {
    wordElement.innerHTML = '';
    for (let i = 0; i < currentWord.length; i++) {
        const span = document.createElement('span');
        span.classList.add('symbol');
        span.textContent = currentWord[i];
        if (i < currentLetterIndex) {
            span.classList.add('symbol_correct');
        } else if (i === currentLetterIndex) {
            span.classList.add('symbol_active');
        }
        wordElement.appendChild(span);
    }
}

function startGame() {
    currentWord = getRandomWord();
    currentLetterIndex = 0;
    renderWord();
}

document.addEventListener('keydown', (event) => {
    if (!currentWord) {
        return;
    }

    const typedLetter = event.key.toUpperCase();
    const expectedLetter = currentWord[currentLetterIndex];

    if (typedLetter === expectedLetter) {
        currentLetterIndex++;
        renderWord();
        if (currentLetterIndex === currentWord.length) {
            wins++;
            winsElement.textContent = wins;
            setTimeout(startGame, 1000); // Задержка перед следующим словом
        }
    } else {
        losses++;
        lossElement.textContent = losses;
        // Можно добавить визуальную индикацию ошибки (например, подсветить неправильную букву)
    }
});

// Запуск первой игры
startGame();