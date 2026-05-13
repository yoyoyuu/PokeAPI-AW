import { useEffect, useState } from 'react';
import { getPokemonList } from './services/pokemonService';
import type { PokemonListItem } from './types/pokemon';
import './App.css';

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
    <div className="contenedor">
      <h1 className="titulo">Usando PokeAPI yay</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid-pokemon">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="tarjeta">
              <div className="cuadro-foto"></div>
              <p className="nombre">{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
      <p>lo di todo</p>
    </div>
  );
}

export default App;