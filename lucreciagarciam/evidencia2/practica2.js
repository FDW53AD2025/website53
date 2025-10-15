// //Desarrollar una pagina web que permita generas la siguiente tabla de numeros, Esta tabla, permite aprender las tablas de mmultiplicar.La aplicacion utilizara una caja de texto en donde el usuario podra capturar la altura de la tabla.
//Ejemplo 1: Altura 3 
const boton = document.getElementById("boton");
const tabla = document.createElement("tabla");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", e => {
    for(let fila=0; fila <11 ; fila++ ){
        const tr = document.createElement("tr");
        fila.textContent = tr
        tabla.appendChild(tr);
        fila.innertext = "x";

    for(let columna=0; columna <11 ; columna++ ){
        const td = document.createElement("td");
        td.textContent = fila * columna;
        if (fila == 0 & columna == 0){
            td.textContent = "x";
        }
        else if (fila == 0){
            td.textContent = columna;
        }
        else if (columna == 0){
            td.textContent = fila;
        }

        tr.appendChild(td);
        
        tabla.appendChild(tr);
    } 
}
    contenedor.appendChild(tabla);
})