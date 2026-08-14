import {Link} from "react-router-dom";

export default function Navbar () {
    return <div className="bg-gray-200 w-full h-12 flex flex-col items-end">
        <Link to="/">
        <div className="w-1/12 h-full grid-cols-2 grid gap-2 items-center justify-items-center pl-3">
            <h2>Pokedex</h2>
            <img className="w-full h-full object-contain pl-2 pt-2 pb-2" src="/src/assets/pokedex.png" alt="logo" />
        </div>
        </Link>
    </div>
}