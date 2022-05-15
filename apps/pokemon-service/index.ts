import { PokemonList } from "types";
import axios from "axios";
import fastify from "fastify";

const server = fastify().register(require("@fastify/cors"));

server.get("/", async (request, reply) => {
  const pokemonList = await axios.get<PokemonList>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  return pokemonList.data.results.map((pokemon) => pokemon.name);
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
