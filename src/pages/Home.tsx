import {SearchBar} from "../components/SearchBar.tsx";
import {usePokemons} from "../hooks/usePokemons.tsx";

function Home(){
    const {pokemons, loadingPokemons, errorLoading} = usePokemons();
    return <div>
        <SearchBar isLoading={false} onSearch={()=>{console.log("hola")}}/>
        {loadingPokemons ? (
            <p>Cargando...</p>
        ) : errorLoading ? (
            <p>{errorLoading}</p>
        ) : (
            <div>
                {pokemons.slice(0, 10).map((pokemon) => (
                    <p key={pokemon.name}>{pokemon.name}</p>
                ))}
            </div>
        )}
    </div>;
}
export default Home;