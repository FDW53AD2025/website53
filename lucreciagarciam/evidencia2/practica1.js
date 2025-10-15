const inputNumeroUno = document.getElementById("num1")
const inputNumeroDos = document.getElementById("num2")
const listaOperador = document.getElementById("operador")
const inputResultado = document.getElementById("resultado")
const botonCalcular = document.getElementById("calcular")

botonCalcular.addEventListener("click", e => {
    e.preventDefault();
    let num1 = parseInt(inputNumeroUno.value);
    let num2 = parseInt(inputNumeroDos.value);
    let operador = parseInt(listaOperador.value);
    let resultado;

    switch(operador){
        case 1:
            resultado = (num1 < num2);
            break;
        case 2:
            resultado = (num1 <= num2);
            break
        case 3:
            resultado = (num1 > num2);
            break;
        case 4:
            resultado = (num1 >= num2);
            break;
        case 5:
            resultado = (num1 == num2);
            break;
        case 6:
            resultado = (num1 != num2);
            break;
    }

    inputResultado.value = resultado;
});