"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonsWeakness = void 0;
const repository_1 = require("./repository");
const getPokemonsWeakness = (name) => {
    const pokemon = (0, repository_1.findByName)(name);
    const typeIWeakness = (0, repository_1.getPokemonsWeaknessByType)(pokemon === null || pokemon === void 0 ? void 0 : pokemon.types);
    const weaknesses = typeIWeakness.map((a) => a.weaknesses);
    const pokemons = weaknesses.flatMap((innerArray) => innerArray);
    pokemon.weaknesses = [...new Set(pokemons)];
    console.log(pokemon);
    return pokemon;
};
exports.getPokemonsWeakness = getPokemonsWeakness;
