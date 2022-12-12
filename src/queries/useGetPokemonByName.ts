import { useQuery, UseQueryResult } from "react-query";
import { Pokemon } from "../types/pokemon";

const getPokemonByName = (name: string): Promise<Pokemon> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching Pokemon by id", e);
    });
};

const useGetPokemonByName = (name: string): UseQueryResult<Pokemon, unknown> =>
  useQuery(["pokemon", name], () => getPokemonByName(name));

export default useGetPokemonByName;
