const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const Operador = document.getElementById("operador");
const inputResultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let operador = Number(Operador.value);
    let resultado;

    switch(operador){
        case 1:
            resultado = num1 > num2;
            break
        case 2:
            resultado = num1 >= num2;
            break
        case 3:
            resultado = num1 < num2;
            break
        case 4:
            resultado = num1 <= num2;
            break
        case 5:
            resultado = num1 == num2;
            break
        case 6:
            resultado = num1 != num2;
            break
    };
    inputResultado.value = resultado;
});