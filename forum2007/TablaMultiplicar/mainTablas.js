const contenedor = document.getElementById("tabla");
const btnGenerar = document.getElementById("btnGenerar");

btnGenerar.addEventListener("click", e => {
    
    contenedor.innerHTML = "";

    let numero = parseInt(document.getElementById("numero").value);
    if (numero <= 0) {
        alert("Ingresa un número válido");
        return;
    }

    let tabla = document.createElement("table");
    tabla.border = "1";
   

    let filaEncabezado = document.createElement("tr");
    let celdaX = document.createElement("td");
    celdaX.textContent = "X";
    filaEncabezado.appendChild(celdaX);

    for (let i = 1; i <= numero; i++) {
        let th = document.createElement("td");
        th.textContent = i;
        filaEncabezado.appendChild(th);
    }

    tabla.appendChild(filaEncabezado);

    for (let i = 1; i <= numero; i++) {
        let fila = document.createElement("tr");

        let encabezado = document.createElement("td");
        encabezado.textContent = i;
        fila.appendChild(encabezado);

        for (let j = 1; j <= numero; j++) {
            let celda = document.createElement("td");
            celda.textContent = i * j;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
});

