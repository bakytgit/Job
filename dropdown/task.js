const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const itemElements = dropdown.querySelectorAll('.dropdown__item');

    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    itemElements.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Запрещаем переход по ссылке
            listElement.classList.remove('dropdown__list_active');
            valueElement.textContent = event.target.textContent; // Используем event.target
        });
    });

    // Закрытие дропдауна при клике вне элемента
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            listElement.classList.remove('dropdown__list_active');
        }
    });
});