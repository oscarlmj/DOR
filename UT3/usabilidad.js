function agregarTarea() {
    // Obtener los valores del formulario
    let tareaInput = document.getElementById("tarea").value;
    let tipoInput = document.getElementById("tipo").value;
  
    // Crear un nuevo elemento li
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = tareaInput;
  
    // Agregar estilos según el tipo de tarea
    switch (tipoInput) {
      case "clase":
        nuevoElemento.style.backgroundColor = "lightblue";
        break;
      case "deporte":
        nuevoElemento.style.backgroundColor = "lightcoral";
        break;
      case "ocio":
        nuevoElemento.style.backgroundColor = "lightgreen";
        break;
    }
  
    // Agregar la clase correspondiente según el tipo de tarea
    nuevoElemento.classList.add(tipoInput);
  
    // Agregar botones de eliminar y editar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      eliminarTarea(nuevoElemento);
    });
    nuevoElemento.appendChild(botonEliminar);
  
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", function () {
      editarTarea(nuevoElemento, botonEditar);
    });
    nuevoElemento.appendChild(botonEditar);
  
    // Agregar el nuevo elemento a la listaTareas
    document.getElementById("listaTareas").appendChild(nuevoElemento);
  
    // Limpiar el formulario
    document.getElementById("tarea").value = "";
  }
  
  function eliminarTarea(elemento) {
    elemento.remove();
  }
  
  function editarTarea(elemento, botonEditar) {
    // Obtener el texto actual
    let textoActual = elemento.textContent;
  
    // Crear un input de texto para la edición
    let inputEditar = document.createElement("input");
    inputEditar.type = "text";
  
    // Crear un botón para confirmar la edición
    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Confirmar";
    botonConfirmar.addEventListener("click", function () {
      confirmarEdicion(elemento, inputEditar, botonEditar);
    });
  
    // Reemplazar el contenido actual con el input y el botón de confirmar
    elemento.innerHTML = "";
    elemento.appendChild(inputEditar);
    elemento.appendChild(botonConfirmar);
  
    // Deshabilitar el botón de editar mientras se está editando
    botonEditar.disabled = true;
  }
  
  function confirmarEdicion(elemento, inputEditar, botonEditar) {
    // Actualizar el texto del elemento con el valor del input
    elemento.textContent = inputEditar.value;
  
    // Restablecer el botón de editar
    let nuevoBotonEditar = document.createElement("button");
    nuevoBotonEditar.textContent = "Editar";
    nuevoBotonEditar.addEventListener("click", function () {
      editarTarea(elemento, nuevoBotonEditar);
    });
    elemento.appendChild(nuevoBotonEditar);
  
    // Restablecer el botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      eliminarTarea(elemento);
    });
    elemento.appendChild(botonEliminar);
  }
  