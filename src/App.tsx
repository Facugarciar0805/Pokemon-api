import './App.css'
import {SearchBar} from "./components/SearchBar.tsx";

function App() {
  return (
    <>
      <SearchBar isLoading={false} onSearch={()=>{console.log("hola")}}/>
    </>
  )
}

export default App
