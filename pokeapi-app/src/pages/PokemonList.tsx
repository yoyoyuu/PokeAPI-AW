import { useEffect, useState } from "react";
import { getPokemonList } from "../services/pokemonService";
import type { PokemonListItem } from "../types/pokemon";
import { PokemonCard } from "../components/PokemonCard";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-rose-600 text-center mb-8 tracking-widest">
        PokeAPI yay
      </h1>

      {loading ? (
        <p className="text-center text-rose-400 animate-pulse">Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pokemons.map((p) => (
            <PokemonCard key={p.name} name={p.name} url={p.url} />
          ))}
        </div>
      )}
    </div>
  );
};
