const inputnumero1 = document.getElementById("numero1");
const inputnumero2 = document.getElementById("numero2");
const combooperadores = document.getElementById("operadores");
const inputresultado = document.getElementById("resultado");
const botoncalcular = document.getElementById("calcular");

botoncalcular.addEventListener("click", (e) => {
  e.preventDefault();

  const numero1 = parseFloat(inputnumero1.value);
  const numero2 = parseFloat(inputnumero2.value);
  const operador = combooperadores.value;
  let resultado;

  switch (operador) {
    case ">":
      resultado = numero1 > numero2;
      break;
    case ">=":
      resultado = numero1 >= numero2;
      break;
    case "<":
      resultado = numero1 < numero2;
      break;
    case "<=":
      resultado = numero1 <= numero2;
      break;
    case "==":
      resultado = numero1 == numero2;
      break;
    case "!=":
      resultado = numero1 != numero2;
      break;
    default:
      resultado = "Operador no válido";
  }

  inputresultado.value = resultado;
});