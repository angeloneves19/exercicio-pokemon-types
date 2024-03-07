import { PokemonType } from "./types"
const { readFileSync } = require('fs');

const readPokemonList = JSON.parse(readFileSync(__dirname + "/" + "db.json"))

export const findByName = (name: string):PokemonType | undefined => {
    return readPokemonList.pokemons.find((a:any) => a.name === name)
}

export const readPokemonWeaknessObject = () =>{
        const data = readFileSync(__dirname + "/" + "dbWeakness.json", "utf8")
       return JSON.parse(data)
}

//Primeiro criamos uma const, com um parametro!
//Dai retornamos a função readPokemonWeaknessObject que puxa as informacoes do banco de dados do dbWeakness.
//Filtramos o objecto, usando o paramentro element, dai chamamos nosso parametro declarado no inicio chamado de type
//que filtra atraves do url puxando os tipos declado no db.json, 
//traves do include elemet.type comparamos o parametro type com os tipos que estaon declarados no dbWeakness.
export const getPokemonsWeaknessByType = (type:any) =>{
    const filterObject = readPokemonWeaknessObject().filter((element:any)=> type.includes(element.type))
    return filterObject.concat()
}