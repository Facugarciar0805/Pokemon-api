import {SearchBar} from "../components/SearchBar.tsx";

function Home(){
    return <div>
        <SearchBar isLoading={false} onSearch={()=>{console.log("hola")}}/>
    </div>;
}
export default Home;