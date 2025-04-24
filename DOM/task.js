const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    const isVisible = rect.top < windowHeight && rect.bottom > 0;

    if (isVisible) {
      reveal.classList.add('reveal_active');
    }
    // Опционально: удаление класса при исчезновении элемента
    // else {
    //   reveal.classList.remove('reveal_active');
    // }
  });
}

window.addEventListener('scroll', checkVisibility);

// Вызываем функцию при загрузке страницы
checkVisibility();