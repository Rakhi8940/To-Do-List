// script.js

document.getElementById('add-task').addEventListener('click', function() {
    let taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    let taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.addEventListener('click', function() {
        taskItem.style.transform = "scale(0)";
        setTimeout(() => taskItem.remove(), 200);
    });

    taskItem.appendChild(deleteButton);

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById('new-task').value = '';
});
