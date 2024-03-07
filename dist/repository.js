"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonsWeaknessByType = exports.readPokemonWeaknessObject = exports.findByName = void 0;
const { readFileSync } = require('fs');
const readPokemonList = JSON.parse(readFileSync(__dirname + "/" + "db.json"));
const findByName = (name) => {
    return readPokemonList.pokemons.find((a) => a.name === name);
};
exports.findByName = findByName;
const readPokemonWeaknessObject = () => {
    const data = readFileSync(__dirname + "/" + "dbWeakness.json", "utf8");
    return JSON.parse(data);
};
exports.readPokemonWeaknessObject = readPokemonWeaknessObject;
//Primeiro criamos uma const, com um parametro!
//Dai retornamos a função readPokemonWeaknessObject que puxa as informacoes do banco de dados do dbWeakness.
//Filtramos o objecto, usando o paramentro element, dai chamamos nosso parametro declarado no inicio chamado de type
//que filtra atraves do url puxando os tipos declado no db.json, 
//traves do include elemet.type comparamos o parametro type com os tipos que estaon declarados no dbWeakness.
const getPokemonsWeaknessByType = (type) => {
    const filterObject = (0, exports.readPokemonWeaknessObject)().filter((element) => type.includes(element.type));
    return filterObject.concat();
};
exports.getPokemonsWeaknessByType = getPokemonsWeaknessByType;
