const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const tamaño = parseInt(document.getElementById("tamaño").value);
    tabla.innerHTML = "";

    for (let fila = 0; fila <= tamaño; fila++){
        const filaelemento = document.createElement("tr");

        for (let columna = 0; columna <= tamaño; columna++){
            const celda = document.createElement("td");

            if (fila === 0&& columna === 0){
                celda.textContent = "x";
            } else if (fila === 0){
                celda.textContent = columna;
            } else if (columna === 0){
                celda.textContent = fila;
            } else {
                celda.textContent = fila * columna;
            }
            filaelemento.appendChild(celda);
        
        }
        tabla.appendChild(filaelemento); 
    }
}
);