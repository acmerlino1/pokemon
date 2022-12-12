import useGetAllPokemon from "../queries/useGetAllPokemon";
import { Spinner, SimpleGrid, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import PokemonModal from "./PokemonModal";

const PokemonList = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetAllPokemon();

  const pokemons = data?.pokemon_species;

  const onClick = (name: string) => {
    setSelectedPokemon(name);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  return (
    <>
      <Flex justifyContent="center">
        <Text fontSize="4xl">Select a Pokemon to learn more about it!</Text>
      </Flex>
      <SimpleGrid minChildWidth="140px" spacing="40px" p={20}>
        {pokemons?.map((pokemon) => (
          <Button
            key={pokemon.name}
            colorScheme="teal"
            size="lg"
            onClick={() => onClick(pokemon.name)}
          >
            {pokemon.name}
          </Button>
        ))}
      </SimpleGrid>
      {selectedPokemon && (
        <PokemonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          name={selectedPokemon}
        />
      )}
    </>
  );
};

export default PokemonList;
