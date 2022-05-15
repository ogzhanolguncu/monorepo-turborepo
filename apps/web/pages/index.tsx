import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "types";

export default function Web() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get("http://127.0.0.1:8080/");
      setPokemonList(res.data);
    };
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>POKEMON LIST</h1>
      <div>
        {pokemonList?.map((pokemon) => (
          <p key={pokemon.name}>{pokemon}</p>
        ))}
      </div>
    </div>
  );
}
