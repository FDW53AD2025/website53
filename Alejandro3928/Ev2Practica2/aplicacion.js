const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");
const limitejs = document.getElementById("limite");

boton.addEventListener("click", e => {
  const limite = parseInt(limitejs.value);
  tabla.innerHTML = "";

  const fila_arriba = document.createElement("tr");
  const thX = document.createElement("th");
  thX.innerText = "X";
  fila_arriba.appendChild(thX);

  for (let i = 1; i <= limite; i++) {
    const th = document.createElement("th");
    th.innerText = i;
    fila_arriba.appendChild(th);
  }
  tabla.appendChild(fila_arriba);

  for (let num = 1; num <= limite; num++) {
    const fila = document.createElement("tr");
    const thnum = document.createElement("th");
    thnum.innerText = num;
    fila.appendChild(thnum);
    for (let num2 = 1; num2 <= limite; num2++) {
      const td = document.createElement("td");
      td.innerText = num * num2;
      fila.appendChild(td);
    }
    tabla.appendChild(fila);
  }
});
