document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('newTaskInput');
    const taskList = document.getElementById('taskList');

    if (newTaskInput) {
        newTaskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
                addTask(newTaskInput.value.trim());
                newTaskInput.value = '';
            }
        });
    } else {
        console.error("Элемент с id 'newTaskInput' не найден.");
    }

    function addTask(taskText) {
        const taskHTML = `
            <div class="task">
              <div class="task__title">
                ${taskText}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        taskList.insertAdjacentHTML('afterbegin', taskHTML);

        // Находим добавленный элемент крестика и добавляем обработчик
        const removeButton = taskList.querySelector('.task:first-child .task__remove');
        if (removeButton) {
            removeButton.addEventListener('click', function(event) {
                event.preventDefault();
                this.closest('.task').remove();
            });
        } else {
            console.error("Не удалось найти кнопку удаления для новой задачи.");
        }
    }
});