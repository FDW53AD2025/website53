document.getElementById("boton").addEventListener("click", e => {
  e.preventDefault();

  const numero = Number(document.getElementById("numero").value);
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = ""; 

  let columna = document.createElement("tr");
  columna.innerHTML = "<th></th>"; 

  for (let col = 1; col <= numero; col++) {
    columna.innerHTML += `<th>${col}</th>`;
  }
  tabla.appendChild(columna);

  for (let fila = 1; fila <= numero; fila++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<th>${fila}</th>`; 
    for (let col = 1; col <= numero; col++) {
      tr.innerHTML += `<td>${fila * col}</td>`;
    }
    tabla.appendChild(tr);
  }
});
