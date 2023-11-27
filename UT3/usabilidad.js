
document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const taskForm = document.getElementById('taskForm');
    const newTaskInput = document.getElementById('newTask');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validar que el campo no esté vacío
        if (newTaskInput.value.trim() === '') {
            alert('Por favor, ingrese una tarea.');
            return;
        }

        // Crear un nuevo elemento de lista (li) con la tarea
        const newTaskElement = document.createElement('li');
        newTaskElement.innerHTML = `
            <span>${newTaskInput.value}</span>
            <button onclick="editTask(this)">Editar</button>
            <button onclick="deleteTask(this)">Eliminar</button>
        `;

        // Agregar el nuevo elemento de lista a la lista de tareas
        taskList.appendChild(newTaskElement);

        // Limpiar el campo de entrada después de agregar la tarea
        newTaskInput.value = '';
    });
});

function editTask(button) {
    // Obtener el elemento de la tarea actual
    const taskElement = button.parentNode;

    // Obtener el texto actual de la tarea
    const currentTaskText = taskElement.querySelector('span').textContent;

    // Solicitar al usuario una nueva tarea
    const newTaskText = prompt('Editar tarea:', currentTaskText);

    // Actualizar la tarea si el usuario ingresó un nuevo texto
    if (newTaskText !== null) {
        taskElement.querySelector('span').textContent = newTaskText;
    }
}

function deleteTask(button) {
    // Obtener el elemento de la tarea actual y eliminarlo
    const taskElement = button.parentNode;
    taskElement.parentNode.removeChild(taskElement);
}