var hasNoPokemon = true
var hasElectricPokemon = false
alert('Welcome TO Pokemon Quarrantine!')
var pokemonChoice = prompt('Do you want a fire, water, or electric pokemon type?')

if (pokemonChoice === 'fire') {
    alert('Good Choice, but you got BURNED before you could catch it!')
    hasNoPokemon = true
    hasElectricPokemon = false
}

else if (pokemonChoice === 'water') {
    alert('Good Choice, but you got SOAKED before you could catch it!')
    hasNoPokemon = true
    hasElectricPokemon = false
}

else if (pokemonChoice === 'electric') {
    alert('GREAT Choice, you  SHOCKED me with that one!')
    hasNoPokemon = false
    hasElectricPokemon = true
}
if (hasElectricPokemon) {
    var train = confirm('Would you like to train your pokemon?')
}

alert('Where would you like to train?')
var pokemonVillage = prompt('Do You Want To Train in the forest, the ocean, or the power plant?')

if (pokemonVillage === 'forest') {
    alert('Good Choice, watch out for those bushes!')
    hasNoPokemon = false
    hasElectricPokemon = true
}

else if (pokemonVillage === 'ocean') {
    alert('i hope you brought your scuba gear, *cues titanic music*')
    hasNoPokemon = false
    hasElectricPokemon = true
}

else if (pokemonVillage === 'power plant') {
    alert('Bring a rubber suit, this may not go how you want')
    hasNoPokemon = false
    hasElectricPokemon = true
}