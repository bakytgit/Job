const tabsContainer = document.getElementById('tabs1');
const tabNavigation = tabsContainer.querySelector('.tab__navigation');
const tabs = tabNavigation.querySelectorAll('.tab');
const tabContents = tabsContainer.querySelector('.tab__contents').querySelectorAll('.tab__content');

function activateTab(index) {
    // Деактивируем все вкладки и контент
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(content => content.classList.remove('tab__content_active'));

    // Активируем текущую вкладку и контент
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

tabNavigation.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab');

    if (clickedTab) {
        // Определяем индекс кликнутой вкладки
        const tabIndex = Array.from(tabs).indexOf(clickedTab);
        activateTab(tabIndex);
    }
});

// Инициализация: показываем первую вкладку при загрузке
activateTab(0);