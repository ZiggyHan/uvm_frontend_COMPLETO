// Suma
function Suma(){
    var Resultado = 0;
    var Numero1 = 17;
    var Numero2 = 25;
    Resultado = Numero1 + Numero2;
    console.log("Este es el resultado de la operación: " + Resultado);
}
// Resta
function Resta(){
    var Resultado = 0;
    var Numero1 = 17;
    var Numero2 = 25;
    Resultado = Numero1 - Numero2;
    console.log("Este es el resultado de la operación: " + Resultado);
}
// Multiplicación
function Mult(){
    var Resultado = 0;
    var Numero1 = 17;
    var Numero2 = 25;
    Resultado = Numero1 * Numero2;
    console.log("Este es el resultado de la operación: " + Resultado);
}
// Dvisión
function Div(){
    var Resultado = 0;
    var Numero1 = 17;
    var Numero2 = 25;
    Resultado = Numero1 / Numero2;
    console.log("Este es el resultado de la operación: " + Resultado);
}

function calculcadora(Operacion, valor1, valor2){
    var Resultado = 0;
    switch(Operacion){
        case "suma": Resultado = parseInt(valor1) + parseInt(valor2); break;
        case "resta": Resultado = parseInt(valor1) - parseInt(valor2); break;
        case "multiplicacion": Resultado = parseInt(valor1) * parseInt(valor2); break;
        case "division": Resultado = parseInt(valor1) / parseInt(valor2); break;
        default: console.log("La operacion no se conoce");

    }
    console.log("El resultado de la operacion es: " + Resultado);
    var Operaciones = document.getElementById("operaciones");
    Operaciones.innerHTML = "El resultado de la operacion es: " + Resultado;
}

function Bienvenida(Nombre){
    console.log("Bienveido: "+Nombre)
}
