const inputNombre = document.getElementById("nombre");
const botonBuscar = document.getElementById("botonBuscar");
const peso = document.getElementById("peso");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listaItems = document.getElementById("listaItems");

async function buscarInfoPokemon(){
   const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputNombre.value)
   const infoPokemon = await respuesta.json();
   peso.innerText = infoPokemon.weight;
   imagen.src = infoPokemon.sprites.other.home.front_default;
   sonido.src = infoPokemon.cries.latest;
   infoPokemon.held_items.forEach(i => {
    const itemLi = document.createElement("li");
    itemLi.innerText = i.item.name;
    
   });

}
botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    console.log("listo")

    buscarInfoPokemon();
});