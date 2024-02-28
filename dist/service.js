"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonsWeakness = void 0;
const repository_1 = require("./repository");
const getPokemonsWeakness = (name) => {
    const pokemon = (0, repository_1.findByName)(name);
    return pokemon;
    // const weakness = []
};
exports.getPokemonsWeakness = getPokemonsWeakness;
