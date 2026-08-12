import { useRoutes } from "react-router-dom" ;
import Home from "../pages/Home.tsx";
import PokemonDetail from "../pages/PokemonDetail.tsx";


export default function AppRouter(){
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/pokemon/:name", element: <PokemonDetail /> },
])
}