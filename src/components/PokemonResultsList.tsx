import type {Pokemon} from "../types/pokemon.ts";

export default function PokemonResultsList({pokemons}: { pokemons: Pokemon[] }) {
    return <div>
        {[...pokemons]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((pokemon) => (
                <div className="hover:bg-gray-400 w-1/3 max-h-40 overflow-y-scroll ">
                    <p key={pokemon.name}>{pokemon.name}</p>
                </div>
            ))}
    </div>
}