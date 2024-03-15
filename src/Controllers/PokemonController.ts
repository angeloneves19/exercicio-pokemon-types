import { getPokemonsWeakness } from "../service";

export const fetchPokemon = (req: any, res: any) => {
  try {
    const response = getPokemonsWeakness(req.params.name);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
