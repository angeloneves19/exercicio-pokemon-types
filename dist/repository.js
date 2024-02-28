"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPokemonWeaknessObject = exports.findByName = exports.readPokemonList = void 0;
const fs = require('fs');
const readPokemonList = () => {
    return fs.readFile(__dirname + "/" + "db.json", "utf8", (error, pkms) => {
        return JSON.parse(pkms).pokemons;
    });
};
exports.readPokemonList = readPokemonList;
const findByName = (name) => {
    const test = (0, exports.readPokemonList)();
    return (0, exports.readPokemonList)().find((a) => a.name === name);
};
exports.findByName = findByName;
const readPokemonWeaknessObject = () => {
    fs.readFile(__dirname + "/" + "dbWeakness.json", "utf8", (error, pkms) => {
        return JSON.parse(pkms).weakness;
    });
};
exports.readPokemonWeaknessObject = readPokemonWeaknessObject;
