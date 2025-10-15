const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const tamaño = parseInt(document.getElementById("tamaño").value);
    tabla.innerHTML = "";

    for (let fila = 0; fila <= tamaño; fila++) {
        const filaElemento = document.createElement("tr");

        for (let col = 0; col <= tamaño; col++) {
            const celda = document.createElement("td");

            if (fila === 0 && col === 0) {
                celda.textContent = "X";
            } else if (fila === 0) {
                celda.textContent = col;
            } else if (col === 0) {
                celda.textContent = fila;
            } else {
                celda.textContent = fila * col;
            }

            filaElemento.appendChild(celda);
        }

        tabla.appendChild(filaElemento);
    }
});
