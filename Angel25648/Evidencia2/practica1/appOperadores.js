// Definir referencias
const inputNum1 = document.getElementById("Num1");
const inputNum2 = document.getElementById("Num2");
const inputResultado = document.getElementById("Resultado");
const boton = document.getElementById("boton");
const comboOperacion = document.getElementById("Operacion");

boton.addEventListener("click", e => {
    e.preventDefault();
    
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    
    let operacion = comboOperacion.value;
    let resultado;

    if (operacion === ">") {
        resultado = num1 > num2;

    } else if (operacion === ">=") {
        resultado = num1 >= num2;

    } else if (operacion === "<") {
        resultado = num1 < num2;

    } else if (operacion === "<=") {
        resultado = num1 <= num2;

    } else if (operacion === "==") {
        resultado = num1 == num2;

    } else if (operacion === "!=") {
        resultado = num1 != num2;
    }

    if (resultado === true) {
        inputResultado.value = "true";
    } else {
        inputResultado.value = "false";
    }
});