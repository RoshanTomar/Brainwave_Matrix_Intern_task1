const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span class="task">${taskText}</span>
                        <button class="delete-btn">Delete</button>`;
        li.addEventListener('click', function () {
            li.classList.toggle('done');
        });
        li.querySelector('.delete-btn').addEventListener('click', function (e) {
            e.stopPropagation();
            taskList.removeChild(li);
        });
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}
