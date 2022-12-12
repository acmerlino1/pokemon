import { useQuery, UseQueryResult } from "react-query";
import { PokemonList } from "../types/pokemon";

const getAllPokemon = (): Promise<PokemonList> => {
  return fetch("https://pokeapi.co/api/v2/generation/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching all pokemon list", e);
    });
};

const useGetAllPokemon = (): UseQueryResult<PokemonList, unknown> =>
  useQuery(["pokemon", "all"], () => getAllPokemon());

export default useGetAllPokemon;
