import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { generationOnePokemon } from "../../mocks/generationOnePokemon";
import PokemonList from "../PokemonList";

const queryClient = new QueryClient();

const TestComponent = () => (
  <QueryClientProvider client={queryClient}>
    <PokemonList />
  </QueryClientProvider>
);

describe("Pokemon app", () => {
  it("should render a loading spinner while fetching pokemon data", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
  it("should render list of pokemon names", async () => {
    render(<TestComponent />);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(
      screen.getByText("Select a Pokemon to learn more about it!")
    ).toBeInTheDocument();
  });
  it("should show loading spinner in modal while fetching pokemon data", async () => {
    render(<TestComponent />);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.getAllByRole("button")).toHaveLength(
      generationOnePokemon.pokemon_species.length
    );

    const charmanderButton = screen.getByRole("button", { name: "charmander" });
    await userEvent.click(charmanderButton);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
  it("should open the modal component when a pokemon is selected", async () => {
    render(<TestComponent />);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.getAllByRole("button")).toHaveLength(
      generationOnePokemon.pokemon_species.length
    );

    const charmanderButton = screen.getByRole("button", { name: "charmander" });
    await userEvent.click(charmanderButton);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.getByAltText("charmander")).toBeInTheDocument();
    expect(screen.getByText("Height: 6 • Weight: 85")).toBeInTheDocument();
    expect(screen.getByText("Abilities:")).toBeInTheDocument();
    expect(screen.getByText("blaze")).toBeInTheDocument();
    expect(screen.getByText("solar-power")).toBeInTheDocument();
    expect(screen.getByText("Types:")).toBeInTheDocument();
    expect(screen.getByText("fire")).toBeInTheDocument();
  });
});
