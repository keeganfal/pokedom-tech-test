import { pokemonArray } from './data/pokemon.js';

// Document query selector for card container 
const body = document.querySelector("body")
const pokemonName = document.querySelector("#pokemon-name")
const numOfResults = document.querySelector("#num-of-results")
const pokemonType = document.querySelector("#pokemon-type")
const submitBtn = document.querySelector("#submit-btn")
const container = document.querySelector(".card-container")

const entry = Object.entries(pokemonArray)

const filterResults = () => {
    console.log(pokemonName.value)
    console.log(numOfResults.value)
    console.log(pokemonType.value)
}

// Going through each Pokemon object 
entry.forEach(e => {
    let pokemonName = e[0,1].name.charAt(0).toUpperCase() + e[0,1].name.slice(1);
    let pokemonTypes = "";
    let pokemonId= e[0,1].id;
    let arrayOfTypes = (e[0,1].types);

    // Check for single or doubble Pokemon types to add "&"
    if (Object.entries(arrayOfTypes).length > 1) {
        pokemonTypes = Object.entries(arrayOfTypes)[0,0][1] +" & "+Object.entries(arrayOfTypes)[0,1][1]
    }
    else {
        pokemonTypes = e[0,1].types;
    }

    // Manipulating the DOM to add the Pokemon data
    container.innerHTML += 
    `<div class="card">
        <img id="card__image" src="${e[0,1].sprite}" alt="">
        <div class="card__content">
            <h2 id="card__heading">${pokemonName}</h2>
            <p class="card__text">${pokemonName} (#${pokemonId}) is a ${pokemonTypes} type pokemon</p>
        </div>
    </div>`;
});

submitBtn.addEventListener("click", filterResults)