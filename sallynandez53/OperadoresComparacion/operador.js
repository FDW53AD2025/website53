function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operador = document.getElementById("operador").value;
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerText = "Ingresa ambos números.";
    return;
  }

  switch (operador) {
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
    case "!=":
    case "<>":
      resultado = num1 != num2;
      break;
    case "=":
      resultado = num1 == num2;
      break;
    default:
      resultado = "Operador no válido";
      break;
  }

  document.getElementById("resultado").innerText =
    `Resultado: ${resultado ? "Verdadero" : "Falso"}`;
}
