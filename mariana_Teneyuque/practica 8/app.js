const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");


    boton.addEventListener("click", e => {
    for (let numero = 1; numero <= 5; numero++) {
        const row = document.createElement("tr");

        for (let numerodos = 1; numerodos <= 5; numerodos++) {
            const item = document.createElement("td");
            item.innerText = numero * numerodos;
            row.appendChild(item);
        }

        const extra = document.createElement("td");
        if (numero == 1) {
            extra.innerText = "X";
        } else {
            extra.innerText = numero;
        }

        row.insertBefore(extra, row.firstChild);
        tabla.appendChild(row);
    }
});