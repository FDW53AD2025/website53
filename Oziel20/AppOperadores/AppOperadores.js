document.getElementById("boton").addEventListener("click", ejercicio);
function ejercicio(event) {
    event.preventDefault();
    let inputnum1 = Number(document.getElementById("num1").value);
    let inputnum2 = Number(document.getElementById("num2").value);
    let comboOperadores = Number(document.getElementById("operadores").value);
    let resultado;
    switch (comboOperadores) {
        case 1:
            resultado = inputnum1 > inputnum2;
            break;
        case 2:
            resultado = inputnum1 < inputnum2;
            break;
        case 3:
            resultado = inputnum1 != inputnum2;
            break;
        case 4:
            resultado = inputnum1 == inputnum2;
            break;
        case 5:
            resultado = inputnum1 >= inputnum2;
            break;
        case 6:
            resultado = inputnum1 <= inputnum2;
            break;
        default:
            resultado = "Operador no válido";
    }
    document.getElementById("resultado").value = resultado;
}