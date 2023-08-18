function calculcadora0js(){
    var Operacion = document.getElementById("operacion").value;
    var valor1 = document.getElementById("numero1").value;
    var valor2 = document.getElementById("numero2").value;

    var Resultado = 0;
    switch(Operacion){
        case "suma": Resultado = "El resultado de la operacion es: " + parseFloat(valor1) + parseFloat(valor2); break;
        case "resta": Resultado = "El resultado de la operacion es: " + parseFloat(valor1) - parseFloat(valor2); break;
        case "multiplicacion": Resultado = "El resultado de la operacion es: " + parseFloat(valor1) * parseFloat(valor2); break;
        case "division": Resultado = "El resultado de la operacion es: " + parseFloat(valor1) / parseFloat(valor2); break;
        default: Resultado = "La operacion no esta disponible"
    
    }
    //console.log("El resultado de la operacion es: " + Resultado);
    var Operaciones = document.getElementById("operaciones");
    Operaciones.innerHTML = Resultado;
    //console.log(Operaciones);
    //switch(Operaciones){
    //    case "La operacion no esta disponible": Operaciones.innerHTML = "La operacion no esta disponible";
    //    default: Operaciones.innerHTML = "El resultado de la operacion es: " +  Resultado;
   // }
}
