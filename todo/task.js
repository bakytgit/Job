document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('newTaskInput');
    const taskList = document.getElementById('taskList');

    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
            addTask(newTaskInput.value.trim());
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('task__title');
        titleDiv.textContent = taskText;

        const removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.classList.add('task__remove');
        removeLink.textContent = '×';

        removeLink.addEventListener('click', function(event) {
            event.preventDefault();
            taskDiv.remove();
        });

        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(removeLink);
        taskList.appendChild(taskDiv);
    }
});