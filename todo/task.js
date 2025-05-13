document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('task__input');
    const addTaskButton = document.getElementById('tasks__add');
    const taskList = document.getElementById('tasks__list');

    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (newTaskInput && newTaskInput.value.trim() !== '') {
            addTask(newTaskInput.value.trim());
            newTaskInput.value = '';
        } else {
            console.warn("Поле ввода новой задачи пустое.");
        }
    });

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
        removeButton.addEventListener('click', function(event) {
            event.preventDefault();
            this.closest('.task').remove();
        });
    }
});