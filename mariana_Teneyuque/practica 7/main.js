// Obtener referencias
const inputNumeroUno = document.getElementById("numeroUno");
const inputNumeroDos = document.getElementById("numeroDos");
const comboOperador = document.getElementById("operadorr"); // ← tu id original
const inputResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("calcular");

// Evento al hacer clic en el botón
botonCalcular.addEventListener("click", (e) => {
  e.preventDefault(); // evitar recarga del formulario

  // Obtener valores
  const numeroUno = parseFloat(inputNumeroUno.value);
  const numeroDos = parseFloat(inputNumeroDos.value);
  const operador = parseInt(comboOperador.value);
  let resultado = "";

  // Validación de números
  if (isNaN(numeroUno) || isNaN(numeroDos)) {
    inputResultado.value = "Error: ingresa números válidos";
    return;
  }

  // Comparaciones según operador
  switch (operador) {
    case 1:
      resultado = numeroUno < numeroDos ? "True" : "False";
      break;
    case 2:
      resultado = numeroUno <= numeroDos ? "True" : "False";
      break;
    case 3:
      resultado = numeroUno > numeroDos ? "True" : "False";
      break;
    case 4:
      resultado = numeroUno >= numeroDos ? "True" : "False";
      break;
    case 5:
      resultado = numeroUno == numeroDos ? "True" : "False";
      break;
    case 6:
      resultado = numeroUno != numeroDos ? "True" : "False";
      break;
    default:
      resultado = "Selecciona un operador";
  }

  // Mostrar resultado
  inputResultado.value = resultado;
});
