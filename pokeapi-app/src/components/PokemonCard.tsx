import { Link } from "react-router-dom";
import type { PokemonListItem } from "../types/pokemon";

type Props = PokemonListItem;

export const PokemonCard = ({ name, url }: Props) => {
  const id = url.split("/").filter(Boolean).pop();
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link
      to={`/pokemon/${name}`}
      className="bg-white border-2 border-rose-100 p-4 hover:border-rose-400 flex flex-col items-center no-underline"
    >
      <div className="bg-rose-50 w-full flex justify-center p-2 mb-3">
        <img src={spriteUrl} alt={name} className="w-20 h-20" />
      </div>
      <p className="font-bold text-slate-700 capitalize text-sm">{name}</p>
      <p className="text-rose-300 text-[15px] font-bold">#{id}</p>
    </Link>
  );
};
