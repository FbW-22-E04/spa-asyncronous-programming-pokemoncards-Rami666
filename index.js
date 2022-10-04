const form = document.querySelector('form');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const hp = document.querySelector('.hp');
const attack = document.querySelector('.attack');
const defense = document.querySelector('.defense');
const spAttack = document.querySelector('.special-attack');
const spDefense = document.querySelector('.special-defense');
const speed = document.querySelector('.speed');
const ability1 = document.querySelector('.ability1');
const ability2 = document.querySelector('.ability2');
   


form.addEventListener('submit', function(e) {
e.preventDefault();

(async function() {

try {
const inputValue = input.value.toLocaleLowerCase().trim();
    
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);

const data = await response.json();

console.log(data);

h1.textContent = data.name.toUpperCase();
img.src = data.sprites.front_default;
hp.textContent = data.stats[0].base_stat;
attack.textContent = data.stats[1].base_stat;
defense.textContent = data.stats[2].base_stat;
spAttack.textContent = data.stats[3].base_stat;
spDefense.textContent = data.stats[4].base_stat;
speed.textContent = data.stats[5].base_stat;
ability1.textContent = data.abilities[0].ability.name;
ability2.textContent = data.abilities[1].ability.name;


}catch(error) {

}

}) ();

});




