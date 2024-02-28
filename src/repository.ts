import { PokemonType } from "./types"
import fs from 'fs';

export const readPokemonList = () => {
   const data = fs.readFile(__dirname + "/" + "db.json", (error, data) =>{
    return JSON.parse(data) 
   })
   return data
    }

export const findByName = (name: string):PokemonType | undefined => {
    const test = readPokemonList()
    return readPokemonList().find((a:any) => a.name === name )
}

export const readPokemonWeaknessObject = () =>{
    readFile(__dirname + "/" + "dbWeakness.json", "utf8", (error:any, pkms:any)=> {
       return JSON.parse(pkms).weakness
    })
}
