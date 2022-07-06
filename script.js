import pokemonArray from "/data/pokemon.js";

const container = document.querySelector(".card-container")

const entry = Object.entries(pokemonArray)

entry.forEach(e => {
    //console.log(e[0,1].types);
    let pokemonName = e[0,1].name.charAt(0).toUpperCase() + e[0,1].name.slice(1);
    let pokemonTypes = "";
    let arrayOfTypes = (e[0,1].types);
   
    //console.log(Object.entries(arrayOfTypes).length)
    console.log(Object.entries(arrayOfTypes)[0,1])

    if (Object.entries(arrayOfTypes).length > 1) {
        pokemonTypes = Object.entries(arrayOfTypes)[0,0][1] +" & "+Object.entries(arrayOfTypes)[0,1][1]
    }
    else {
        pokemonTypes = e[0,1].types;
    }

    container.innerHTML += `<div class="card"><div class="card__content">
    <p class="card__text">${pokemonName} (#${e[0,1].id}) is a ${pokemonTypes} type pokemon</p>
    </div></div>`;
});