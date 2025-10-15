const tabla = document.getElementById("tabla");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    for (let filas = 0; filas <= 5; filas++) {
        const itemfila = document.createElement("tr");

        for (let columnas = 0; columnas <= 5; columnas++) {
            const itemcolumnas = document.createElement("td");

            if (filas === 0 && columnas === 0) {
                itemcolumnas.innerText = "X";
            } else if (filas === 0) {
                itemcolumnas.innerText = columnas;
            } else if (columnas === 0) {
                itemcolumnas.innerText = filas;
            } else {
                itemcolumnas.innerText = columnas * filas;
            }

            itemfila.appendChild(itemcolumnas);
        }

        tabla.appendChild(itemfila); 
    }
});


