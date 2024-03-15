import express = require("express");
import { fetchPokemon } from "./Controllers/PokemonController";

export const pokemonRouter = express.Router()

pokemonRouter.get("/:name", fetchPokemon)