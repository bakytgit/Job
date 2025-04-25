document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null; // Переменная для хранения активной подсказки

    tooltipElements.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const tooltipText = element.getAttribute('title');

            // Закрываем активную подсказку, если она есть и не связана с текущим элементом
            if (activeTooltip && activeTooltip.target !== element) {
                removeTooltip();
            }

            // Переключаем видимость подсказки для текущего элемента
            if (activeTooltip && activeTooltip.target === element) {
                removeTooltip();
            } else {
                // Создаем и показываем подсказку
                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip', 'tooltip_active');
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);

                // Получаем координаты ссылки относительно viewport
                const linkRect = element.getBoundingClientRect();

                // Позиционируем подсказку под ссылкой
                tooltip.style.left = `${linkRect.left}px`;
                tooltip.style.top = `${linkRect.bottom + 5}px`; // Чуть ниже ссылки

                activeTooltip = { target: element, tooltip: tooltip };
            }
        });
    });

    function removeTooltip() {
        if (activeTooltip && activeTooltip.tooltip) {
            activeTooltip.tooltip.classList.remove('tooltip_active');
            activeTooltip.tooltip.remove();
            activeTooltip = null;
        }
    }

    // Закрываем подсказку при клике за ее пределами
    document.addEventListener('click', (event) => {
        if (activeTooltip && !activeTooltip.target.contains(event.target) && !activeTooltip.tooltip.contains(event.target)) {
            removeTooltip();
        }
    });

    // Закрываем подсказку при прокрутке окна
    window.addEventListener('scroll', () => {
        removeTooltip();
    });
});