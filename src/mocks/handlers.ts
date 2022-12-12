import { rest } from "msw";
import { generationOnePokemon } from "./generationOnePokemon";
import { pokemon } from "./pokemon";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/generation/1", (req, res, ctx) => {
    return res(ctx.json(generationOnePokemon));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
    return res(ctx.json(pokemon));
  }),
];
