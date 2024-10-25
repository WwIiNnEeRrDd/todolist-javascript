const tareas = [
    {
        id: 1,
        nombreTarea: "Estudiar NextJS",
        estado: false
    },
    {
        id: 2,
        nombreTarea: "Estudiar JavaScript",
        estado: true
    },
    {
        id: 3,
        nombreTarea: "Estudiar React",
        estado: false
    }
];

function actualizarListaTareas(){
    let listaTareas = '';
    let listaIds = '';
    let listaCheckbox = '';
    let botonBorrar = '';

    contadorTareasRealizadas = 0;

    for(const tarea of tareas){

        if(tarea.estado){
            contadorTareasRealizadas++;
        }
        
        let check = tarea.estado ? 'checked' : '';
        let subrayado = tarea.estado ? 'subrayado' : '';

        listaIds += `<li>${tarea.id}</li>`;
        listaTareas += `<li class="${subrayado}">${tarea.nombreTarea}</li>`;
        listaCheckbox += `<li><input type='checkbox' ${check} onclick="tareaRealizada(${tarea.id})"/></li>`;
        botonBorrar += `<li><button onclick="borrarTarea(${tarea.id})" type='button' class="botonBorrar"><i class="fa-solid fa-x"></i></button></li>`;
    }
    document.querySelector('#lista_id').innerHTML = listaIds;
    document.querySelector('#lista_tareas').innerHTML = listaTareas;
    document.querySelector('#lista_checkbox').innerHTML = listaCheckbox;
    document.querySelector('#lista_botones').innerHTML = botonBorrar;

    document.querySelector('#totalRealizadas').innerHTML = contadorTareasRealizadas;
    document.querySelector('#total').innerHTML = tareas.length;
}

contadorIds = tareas.length;

const agregarTarea = function (event) {
    event.preventDefault();
    const input = document.querySelector('#input').value
    contadorIds++;

    tareas.push({
        id: contadorIds,
        nombreTarea: input,
        estado: false
    })
    actualizarListaTareas();
    input.value = '';
}

const borrarTarea = function (id){
    const posicionTarea = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(posicionTarea, 1);
    actualizarListaTareas();
}

const tareaRealizada = function(id){
    const posicionTarea = tareas.findIndex((tarea) => tarea.id === id)
    tareas[posicionTarea].estado = !tareas[posicionTarea].estado;
    actualizarListaTareas();
}

actualizarListaTareas();