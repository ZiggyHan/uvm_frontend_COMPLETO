function Formulario(){
    var Nombre = document.getElementById("Nombre").value;
    var Edad = document.getElementById("Edad").value;
    var Ocupacion = document.getElementById("Ocupacion").value;

alert("El nombre es: "+Nombre+"\n"+"El valor de la edad es: "+Edad+"\n"+"Laocupacion es: "+Ocupacion);
}

function Cambiocolor(){
    alert("La pagina ya se cargo");
    document.body.style.backgroundColor="grey";
}

const boton = document.getElementById("btn");

/*
boton.addEventListener("click", function(){
    alert("Evento activado a través de un listener");
});
*/
boton.addEventListener("click", Listenner);

function Listenner(){
    alert("El evento se activo")
}

function eliminarEvento(){
    const eliminar = document.getElementById("btnEliminar");
    eliminar.removeEventListener("click", Listenner);
    alert("Elimiar evento")
}