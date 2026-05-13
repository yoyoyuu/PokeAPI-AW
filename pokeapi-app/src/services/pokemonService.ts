const BASE_URL = import.meta.env.VITE_API_URL;

export const getPokemonList = async (limit = 32) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    if (!response.ok) throw new Error("Error al obtener los datos");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
