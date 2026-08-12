import type {Pokemon} from "../types/pokemon.ts";

export type Result<T> =
    | { type: "success"; value: T; isSuccess: true }
    | { type: "failure"; error: Error; isSuccess: false };

export const success = <T,>(value: T): Result<T> => ({ type: "success", value, isSuccess: true });
export const failure = (error: unknown): Result<never> => ({
    type: "failure",
    error: error instanceof Error ? error : new Error(String(error)),
    isSuccess: false,
});

export async function getPokemons(): Promise<Result<Pokemon[]>> {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        if (!response.ok) {
            return failure(new Error(`Error ${response.status} ${response.statusText}`));
        }
        const data = await response.json();
        return success(data.results);
    } catch (error) {
        return failure(error);
    }
}