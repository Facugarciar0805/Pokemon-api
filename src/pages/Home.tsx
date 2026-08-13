import {SearchBar} from "../components/SearchBar.tsx";
import {usePokemons} from "../hooks/usePokemons.tsx";
import PokemonResultsList from "../components/PokemonResultsList.tsx";

function Home(){
    const {pokemons, loadingPokemons, errorLoading} = usePokemons();
    return <div className="flex flex-col items-center justify-center min-h-screen">
            <SearchBar isLoading={false} onSearch={()=>{console.log("hola")}}/>
            {loadingPokemons ? (
                <p>Cargando...</p>
            ) : errorLoading ? (
                <p>{errorLoading}</p>
            ) : (
                <PokemonResultsList pokemons={pokemons} />
            )}
        </div>
}
export default Home;