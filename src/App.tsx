import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/NavBar.tsx";


function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </>
  )
}

export default App
