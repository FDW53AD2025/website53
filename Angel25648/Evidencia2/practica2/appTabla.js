//Definir referencias
const boton = document.getElementById("generarBoton");
const tablaContenedor = document.getElementById("tablaContenedor");

boton.addEventListener("click", e => {
    tablaContenedor.innerHTML = "";

    const tabla = document.createElement('table');

    for (let i = 0; i <= 10; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j <= 10; j++) {
            
            if (i === 0 || j === 0) {
                const celdaEncabezado = document.createElement('th');
                
                if (i === 0 && j === 0) {
                    celdaEncabezado.textContent = 'X';
                } else if (i === 0) {
                    celdaEncabezado.textContent = j;
                } else {
                    celdaEncabezado.textContent = i;
                }
                fila.appendChild(celdaEncabezado);
            } else {
                const celda = document.createElement('td');
                celda.textContent = i * j;
                fila.appendChild(celda);
            }
        }
        tabla.appendChild(fila);
    }

    tablaContenedor.appendChild(tabla);
});