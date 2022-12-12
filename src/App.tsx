import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonList from "./components/PokemonList";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <PokemonList />
        </div>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
