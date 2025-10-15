const tabla = document.getElementById("tabla");
const boton = document.getElementById("boton");
const input = document.getElementById("texto");

boton.addEventListener("click", e => {
    tabla.innerHTML = "";
    let num = Number(input.value);
    for(i= 0; i<=num; i++){
        const fila = document.createElement("tr");
        for (j = 0; j<=num; j++){
            const valor = document.createElement("td");
            fila.appendChild(valor);
            tabla.appendChild(fila);
            if(i == 0 && j==0){
                valor.innerText="X"
            }
            else if(i == 0){
                valor.innerText = j
            }
            else if (j == 0){
                valor.innerText = i
            }
            else{
                valor.innerText = i + j 
            }
        }
    }
});