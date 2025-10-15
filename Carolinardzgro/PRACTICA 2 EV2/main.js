const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");
 
boton.addEventListener("click", () => {
    const altura = parseInt(document.getElementById("altura").value);
    resultado.innerHTML = "";
 
    if (isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "<p style='color:red;'>Por favor, ingresa una altura válida mayor que cero.</p>";
        return;
    }

    let tabla = "<table>";
 
    tabla += "<tr><th>X</th>";
    for (let i = 1; i <= altura; i++) {
        tabla += `<th>${i}</th>`;
    }
    tabla += "</tr>";
 

    for (let i = 1; i <= altura; i++) {
        tabla += `<tr><th>${i}</th>`;
        for (let j = 1; j <= altura; j++) {
            tabla += `<td>${i * j}</td>`;
        }
        tabla += "</tr>";
    }
 
    tabla += "</table>";
    resultado.innerHTML = tabla;
});
 