import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  SkeletonText,
  Badge,
  Flex,
} from "@chakra-ui/react";
import useGetPokemonByName from "../queries/useGetPokemonById";

interface PokemonModalProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

const PokemonModal = ({ name, isOpen, onClose }: PokemonModalProps) => {
  const { data: pokemonData, isLoading } = useGetPokemonByName(name);

  const pokemon = {
    name,
    imageUrl: pokemonData?.sprites.front_default,
    imageAlt: name,
    height: pokemonData?.height,
    weight: pokemonData?.weight,
    abilities: pokemonData?.abilities.map((ability) => ability.ability.name),
    types: pokemonData?.types.map((type) => type.type.name),
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="capitalize">{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg="white">
              {isLoading ? (
                <>
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </>
              ) : (
                <Flex
                  maxW="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Image
                    src={pokemon.imageUrl}
                    alt={pokemon.imageAlt}
                    boxSize="150px"
                    objectFit="cover"
                  />

                  <Box p="6">
                    <Box color="gray.500" fontWeight="semibold" mb={2}>
                      Height: {pokemon.height} &bull; Weight: {pokemon.weight}
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      Abilities:
                    </Box>
                    <Box display="flex" alignItems="baseline" gap={2}>
                      {pokemon.abilities?.map((ability) => (
                        <Badge
                          key={ability}
                          borderRadius="full"
                          px="2"
                          colorScheme="teal"
                        >
                          {ability}
                        </Badge>
                      ))}
                    </Box>

                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      Types:
                    </Box>
                    <Box display="flex" alignItems="baseline" gap={2}>
                      {pokemon.types?.map((type) => (
                        <Badge
                          key={type}
                          borderRadius="full"
                          px="2"
                          colorScheme="purple"
                        >
                          {type}
                        </Badge>
                      ))}
                    </Box>
                  </Box>
                </Flex>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonModal;
