import { findByName } from "./repository"
import { PokemonType } from "./types"


export const getPokemonsWeakness = (name: string) => {
const pokemon:PokemonType | undefined = findByName(name)
return pokemon
// const weakness = []

}