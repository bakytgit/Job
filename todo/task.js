document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    if (addTaskButton) {
        addTaskButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (newTaskInput && newTaskInput.value.trim() !== '') {
                addTask(newTaskInput.value.trim());
                newTaskInput.value = '';
            } else if (!newTaskInput) {
                console.error("Элемент с id 'newTaskInput' не найден.");
            } else {
                console.warn("Поле ввода новой задачи пустое.");
            }
        });
    } else {
        console.error("Элемент с id 'addTaskButton' не найден.");
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