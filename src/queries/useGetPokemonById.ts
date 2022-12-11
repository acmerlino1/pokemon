import { useQuery } from "react-query";

const getPokemonById = (id: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching Pokemon by id", e);
    });
};

const useGetPokemonById = (id: string) =>
  useQuery(["pokemon", id], () => getPokemonById(id));
