const boton = document.getElementById("boton");
const table = document.getElementById('table');
const altura = document.getElementById('altura');

boton.addEventListener('click', e => {
    const n = Math.max(1, parseInt(altura.value, 10) || 3); // por defecto 3 -> muestra 1..3

    table.innerHTML = '';

    
    const encabezado = document.createElement('tr');
    const esquina = document.createElement('th');
    esquina.innerText = 'X';     
    encabezado.appendChild(esquina);
    for (let c = 1; c <= n; c++) {
        const th = document.createElement('th');
        th.innerText = c;
        encabezado.appendChild(th);
    }
    table.appendChild(encabezado);

    
    for (let r = 1; r <= n; r++) {
        const tr = document.createElement('tr');

        const rowHeader = document.createElement('th');
        rowHeader.innerText = r;
        tr.appendChild(rowHeader);

        for (let c = 1; c <= n; c++) {
            const td = document.createElement('td');
            td.innerText = r * c;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
});
