
document.addEventListener('DOMContentLoaded', function () {
let lista=document.getElementById("lista");
let formulario=document.getElementById("nuevaTarea");
let tarea=document.getElementById("tarea");
let fecha=document.getElementById("fecha");

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    if(tarea.value.trim()==='')
    {
        alert("Introduce una tarea");
    }

    let nuevaTarea=document.createElement('td');
    nuevaTarea.innerHTML=`
    <span>${tarea.value}</span>
    <button>Editar</button>
    <button>Eliminar</button>
    <button id="finalizar">Finalizar</button>
    `;

    lista.appendChild(nuevaTarea);
})
})