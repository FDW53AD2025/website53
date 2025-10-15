const inputUno = document.getElementById("Uno");
const inputDos = document.getElementById("Dos");
const operador = document.getElementById("Operador");
const inputResultado = document.getElementById("Resultado");
const botonCalcular = document.getElementById("Calcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();
    
    let Uno = parseFloat(inputUno.value);
    let Dos = parseFloat(inputDos.value);
    let op = parseInt(operador.value);
    let Resultado;
    switch(op) {
        case 1:
            Resultado = (Uno == Dos);
            break;
        case 2:
            Resultado = (Uno != Dos);
            break;
        case 3:
            Resultado = (Uno > Dos);
            break;
        case 4:
            Resultado = (Uno < Dos);
            break;
        case 5:
            Resultado = (Uno >= Dos);
            break;
        case 6:
            Resultado = (Uno <= Dos);
            break;
        default:
            alert("Operación no válida");
            return; // salir de la función
    } // fin del switch

    // mostrar resultado
    inputResultado.value = Resultado;
});