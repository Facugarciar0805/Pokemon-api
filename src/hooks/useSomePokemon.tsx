import {useEffect, useState} from "react";
import type {Pokemon} from "../types/pokemon.ts";
import {getPokemonByName} from "../api/pokemonApi.tsx";

export function useSomePokemon(name: string) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loadingPokemon, setLoadingPokemon] = useState(true);
    const [errorLoading, setErrorLoading] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        async function fetchPokemon() {
            const result = await getPokemonByName(name)
            if(cancelled) return
            if(result.isSuccess){
                setPokemon(result.value)
            }else{
                setErrorLoading(result.error.message)
            }
            setLoadingPokemon(false)
        }
        fetchPokemon();
        return () => { cancelled = true; };
    }, []);
    return {pokemon, loadingPokemon, errorLoading}
}