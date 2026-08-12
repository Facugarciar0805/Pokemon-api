import './App.css'
import {SearchBar} from "./components/SearchBar.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import PokemonDetail from "./pages/PokemonDetail.tsx";


function App() {
  return (
    <>
        <BrowserRouter>                                                                                                            Context
            <Routes>                                                                                                                 15,704 tokens
                <Route path="/" element={<Home />} />                                                                                  8% used
                <Route path="/pokemon/:name" element={<PokemonDetail />} />                                                            $0.00 spent
            </Routes>
        </BrowserRouter>
        <SearchBar isLoading={false} onSearch={()=>{console.log("hola")}}/>
    </>
  )
}

export default App
