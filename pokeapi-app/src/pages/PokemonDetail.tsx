import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../services/pokemonService";
import type {
  Pokemones,
  Type as PokemonType,
  Stat as PokemonStat,
} from "../types/pokemon";

export const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<Pokemones | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      getPokemonDetail(name).then((data) => {
        setPokemon(data);
        setLoading(false);
      });
    }
  }, [name]);

  if (loading)
    return (
      <div className="text-center p-10 text-rose-500">Cargando detalles...</div>
    );

  if (!pokemon)
    return (
      <div className="text-center p-10 text-rose-500">
        No se encontró el Pokémon.
      </div>
    );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link
        to="/"
        className="text-rose-500 font-bold mb-4 inline-block hover:underline"
      >
        Volver
      </Link>

      <div className="bg-white border-4 border-rose-200 p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="bg-rose-50 border-2 border-rose-100 p-4">
          <img
            src={
              pokemon.sprites.other?.["official-artwork"]?.front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            className="w-48 h-48"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-black text-slate-800 capitalize mb-2">
            {pokemon.name}
          </h2>
          <p className="text-rose-400 font-bold mb-4">ID: #{pokemon.id}</p>
          {/*Nota mental hacer esto bien en casa*/}

          <div className="flex gap-2 mb-6">
            {pokemon.types.map((t: PokemonType) => (
              <span
                key={t.type.name}
                className="bg-rose-100 text-rose-600 px-3 py-1 text-xs font-bold uppercase border border-rose-200"
              >
                {t.type.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm border-t border-rose-100 pt-4">
            <p>
              <strong>Altura:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white border-4 border-rose-200 p-6">
        <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-tighter">
          Estadísticas
        </h3>
        <div className="space-y-3">
          {pokemon.stats.map((s: PokemonStat) => (
            <div key={s.stat.name}>
              <div className="flex justify-between text-xs mb-1 uppercase font-bold text-slate-500">
                <span>{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </div>
              <div className="w-full bg-rose-50 h-3 border border-rose-100">
                <div
                  className="bg-rose-400 h-full"
                  style={{ width: `${(s.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
