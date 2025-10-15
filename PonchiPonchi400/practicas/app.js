const inputNombre = document.getElementById("nombre");
const botonBuscar = document.getElementById("botonBuscar");

async function buscarInfoPokemon(){
   const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputNombre.value)
   const infoPokemon = await respuesta.json();
}
botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    console.log("listo")

    buscarInfoPokemon();
});