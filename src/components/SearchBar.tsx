import {useState} from 'react'

interface SearchBarProps {
	onSearch: (searchTerm: string)=>void;
	isLoading: boolean;
}

export function SearchBar({onSearch,isLoading}: SearchBarProps){
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent)=> {
		e.preventDefault();
		if(input.trim()){
			onSearch(input.trim().toLowerCase());
		}
	};
	
	return (
		<form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
		<input
		type="text"
		value={input}
		onChange={(e)=>setInput(e.target.value)}
		placeholder="Ej: pikachu, charizard..."
		className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
		/>
		<button
		type="submit"
		disabled={isLoading}
		className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
		>
		Buscar
		</button>
		</form>
	);
}
