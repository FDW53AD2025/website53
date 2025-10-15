const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const selectOperador = document.getElementById("operador");
const inputResultado = document.getElementById("Resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click" , (e) => {
    e.preventDefault();

   const num1 = parseFloat(inputNum1.value);
   const num2 = parseFloat(inputNum2.value);
   const operador = selectOperador.value;
   let Resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    switch (operador) {
        case "1":
            Resultado = num1 < num2;
            break;
        case "2":
            Resultado = num1 <= num2;
            break;
        case "3":
            Resultado = num1 > num2;
            break;
        case "4":
            Resultado = num1 >= num2;
            break;
        case "5":
            Resultado = num1 = num2;
            break;
        case "6":
            Resultado = num1 != num2;
            break;
        default:
            Resultado = "Operador no válido";
    }

    inputResultado.value = Resultado;
});