import type {Pokemon} from "../types/pokemon.ts";
import {Link} from "react-router-dom";

export default function PokemonResultsList({pokemons}: { pokemons: Pokemon[] }) {
    return <div className="w-full max-w-md mt-4 max-h-96 overflow-y-auto border rounded-lg shadow-md">
        {[...pokemons]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((pokemon) => (
                <Link to={"/pokemon/" + pokemon.name} key={pokemon.name}>
                    <div key={pokemon.name} className="hover:bg-gray-100 w-full px-4 py-2">
                        <p>{pokemon.name}</p>
                    </div>
                </Link>
            ))}
    </div>
}