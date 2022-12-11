import { useQuery } from "react-query";

const getAllPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching all pokemon list", e);
    });
};

const useGetAllPokemon = () =>
  useQuery(["pokemon", "all"], () => getAllPokemon());

export default useGetAllPokemon;
