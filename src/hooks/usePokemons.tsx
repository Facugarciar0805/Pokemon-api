// hooks/usePokemons.ts
import { useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon.ts";
import { getPokemons } from "../api/pokemonApi.tsx";

export function usePokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loadingPokemons, setLoadingPokemons] = useState(true);
    const [errorLoading, setErrorLoading] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadPokemons() {
            const result = await getPokemons();
            if (cancelled) return;

            if (result.isSuccess) {
                setPokemons(result.value);
            } else {
                setErrorLoading(result.error.message);
            }
            setLoadingPokemons(false);
        }
        loadPokemons();
        return () => { cancelled = true; };
    }, []);

    return { pokemons, loadingPokemons, errorLoading };
}