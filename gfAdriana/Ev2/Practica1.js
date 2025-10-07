const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const selectOperador = document.getElementById("operador");
const inputResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const operador = selectOperador.value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    switch (operador) {
        case "==":
            resultado = num1 == num2;
            break;
        case "!=":
            resultado = num1 != num2;
            break;
        case ">":
            resultado = num1 > num2;
            break;
        case "<":
            resultado = num1 < num2;
            break;
        case ">=":
            resultado = num1 >= num2;
            break;
        case "<=":
            resultado = num1 <= num2;
            break;
        default:
            resultado = "Operador no válido";
    }

    inputResultado.value = resultado;
});
