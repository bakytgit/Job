document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.has-tooltip');

    tooltipElements.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)

            let tooltip = element.nextElementSibling;

            // Проверяем, существует ли уже подсказка
            if (!tooltip || !tooltip.classList.contains('tooltip')) {
                tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.textContent = element.getAttribute('title');
                element.insertAdjacentElement('afterend', tooltip);
            }

            tooltip.classList.toggle('tooltip_active');

            // Закрытие других активных подсказок
            tooltipElements.forEach(otherElement => {
                if (otherElement !== element) {
                    const otherTooltip = otherElement.nextElementSibling;
                    if (otherTooltip && otherTooltip.classList.contains('tooltip_active')) {
                        otherTooltip.classList.remove('tooltip_active');
                    }
                }
            });
        });
    });
});