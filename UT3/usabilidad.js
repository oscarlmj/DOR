function agregarTarea() {
    var tareaInput = document.getElementById('tarea');
    var fechaInput = document.getElementById('fecha');
    var listaTareas = document.getElementById('listaTareas');

    var nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaInput.value + ' - ' + fechaInput.value;

    listaTareas.appendChild(nuevaTarea);

    // Limpiar los campos del formulario después de agregar la tarea
    tareaInput.value = '';
    fechaInput.value = '';
}
