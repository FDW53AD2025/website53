const inputnumero1 = document.getElementById("Numero1");
const inputnumero2 = document.getElementById("Numero2");
const combooperadores = document.getElementById("Operadores");
const inputresultado = document.getElementById("resultado");
const botonresultado = document.getElementById("botonresultado");

botonresultado.addEventListener("click", e => {
    e.preventDefault();

    let numero1 = parseFloat(inputnumero1.value);
    let numero2 = parseFloat(inputnumero2.value);
    let operadores = parseInt(combooperadores.value);
    let resultado;

    switch (operadores) {
        case 1:
            resultado = numero1 > numero2;
            break;

        case 2:
            resultado = numero1 >= numero2;
            break;

        case 3:
            resultado = numero1 === numero2;
            break;

        case 4:
            resultado = numero1 <= numero2;
            break;

        case 5:
            resultado = numero1 < numero2;
            break;

        case 6:
            resultado = numero1 != numero2;
            break;

        default:
            resultado = "Operador no válido";
    }

    inputresultado.value = (resultado === true) ? "verdadero" : (resultado === false ? "falso" : resultado);
});