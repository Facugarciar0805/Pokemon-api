import {useSomePokemon} from "../hooks/useSomePokemon.tsx";
import {useParams} from "react-router-dom";
import AbilityCard from "../components/AbilityCard.tsx";

function PokemonDetail() {
    const name = useParams().name as string
    const {pokemon, loadingPokemon, errorLoading} = useSomePokemon(name)

    return <div className="flex justify-center items-center h-[calc(100vh-3rem)]">

        {loadingPokemon ? (
            <p>Cargando...</p>
        ) : errorLoading ? (
            <p>{errorLoading}</p>
        ) : (
                <div className="w-1/3 min-h-96 max-h-[70vh] shadow-xl rounded-lg grid grid-rows-[1fr_auto] overflow-hidden">
                    <div className="h-full flex items-center justify-center bg-gradient-to-b from-orange-300 to-red-400 overflow-hidden">
                        <figure className="rounded-lg w-full h-full">
                            <img className="w-full h-full object-contain" src={pokemon?.sprites.front_default} alt="Pokemon" />
                        </figure>
                    </div>
                    <div>
                        <div className="flex capitalize tracking-wide flex-col justify-center items-center pt-2 pb-2">
                            <h2 className="text-2xl">{pokemon?.name}</h2>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-2 pb-2">
                            {pokemon?.abilities.map((a) => (
                                <AbilityCard ability={a?.ability.name}/>
                            ))}
                        </div>
                    </div>
                </div>

        )}
            </div>
}

export default PokemonDetail


