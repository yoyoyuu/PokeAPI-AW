const BASE_URL = import.meta.env.VITE_API_URL;
import type { PokemonListItem, Pokemones } from "../types/pokemon";

export const getPokemonList = async (
  limit = 40,
): Promise<PokemonListItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    if (!response.ok) throw new Error("Error al obtener los datos");
    const data = await response.json();
    return data.results as PokemonListItem[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPokemonDetail = async (
  idOrName: string,
): Promise<Pokemones> => {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  if (!response.ok) throw new Error("No se encontró el Pokémon");
  const data = await response.json();
  return data as Pokemones;
};
