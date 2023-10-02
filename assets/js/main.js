// Defina os parâmetros offset e limit
const offset = 0;
const limit = 10;


const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            convertPokemonToLi(pokemon);


        }
    })
    .catch((error) => console.error(error))

const pokemonList = document.getElementById('pokemonList')
pokemonList.innerHTML += '<li> teste </li>'

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">0001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">

            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>

            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
    `
}
// fetch(url).then(response => {
//     if (!response.ok) {
//         throw new Error('Não foi possível obter os dados');
//     }
//     return response.json(); //aqui se trata do objeto convertido de streams para JSON
// })
//     .then(jsonBody => {
//         console.log(Json); // Os dados da resposta da API serão impressos no console
//     })
//     .catch(error => {
//         console.error('Erro:', error);
//     })
//     .finally(() => {
//         console.log('requisição terminada');
//     });



// console.log("olá mundo")
// console.log(2 + 9)
// console.log("essa linha esta sendo respondida primeiro pq o fecth é assíncrono")





