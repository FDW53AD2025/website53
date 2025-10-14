const tabla = document.getElementById("tabla");

const encabezado = document.createElement("tr");
const esquina = document.createElement("th");
esquina.innerText = "X";
encabezado.appendChild(esquina);

for (let j = 1; j <= 5; j++) {
    const th = document.createElement("th");
    th.innerText = j;
    encabezado.appendChild(th);
}
tabla.appendChild(encabezado);

for (let i = 1; i <= 5; i++) {
    const fila = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = i;
    fila.appendChild(th);

    for (let j = 1; j <= 5; j++) {
        const columna = document.createElement("td");
        columna.innerText = i * j;
        fila.appendChild(columna);
    }
    tabla.appendChild(fila);
}