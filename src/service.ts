
import { findByName, getPokemonsWeaknessByType  } from "./repository";
import { PokemonType } from "./types";

export const getPokemonsWeakness = (name: string):PokemonType | undefined => {
  const pokemon: any = findByName(name);
  const typeIWeakness: any = getPokemonsWeaknessByType(pokemon?.types)
  
     const weaknesses = typeIWeakness.map((a:any) => a.weaknesses)
     const pokemons = weaknesses.flatMap((innerArray:any) => innerArray)
   pokemon.weaknesses = [...new Set (pokemons)]
   console.log(pokemon)

  return pokemon
};
