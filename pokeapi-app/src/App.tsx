import { useEffect, useState } from 'react';
import { getPokemonList } from './services/pokemonService';
import type { PokemonListItem } from './types/pokemon';

function App() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList();
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-rose-600">
          Usando PokeAPI yay
        </h1>

        {loading ? (
          <p className="text-center text-slate-600">Cargando...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.name}
                className="w-36 border border-rose-200 bg-white p-4 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center border border-rose-300 bg-rose-50 text-xs font-semibold capitalize text-slate-500">
                  {pokemon.name.slice(0, 2)}
                </div>
                <p className="font-bold capitalize text-slate-700">{pokemon.name}</p>
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-slate-600">lo di todo</p>
      </div>
    </main>
  );
}

export default App;