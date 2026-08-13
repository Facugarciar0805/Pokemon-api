import {SearchBar} from "../components/SearchBar.tsx";
import {usePokemons} from "../hooks/usePokemons.tsx";
import PokemonResultsList from "../components/PokemonResultsList.tsx";
import {useState} from "react";

function Home(){
    const {pokemons, loadingPokemons, errorLoading} = usePokemons();
    const [searchTerm, setSearchTerm] = useState("");
    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div className="flex flex-col items-center min-h-screen pt-8">
            <SearchBar isLoading={loadingPokemons} onSearch={setSearchTerm}/>
            {loadingPokemons ? (
                <p>Cargando...</p>
            ) : errorLoading ? (
                <p>{errorLoading}</p>
            ) : (
                <PokemonResultsList pokemons={filteredPokemons} />
            )}
        </div>
}
export default Home;