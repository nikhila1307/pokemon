import { useEffect, useState } from "react"
import { PokemonDetails } from "./PokemonDetails";

export const PokemonList = ({ searchTerm }) => {

    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {

        const fetchPokemonData = async () => {
            try {
                const pokemon_raw_data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`);
                const pokemon_json_data = await pokemon_raw_data.json();
                setPokemonData(pokemon_json_data.results)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPokemonData();
    }, []);
    return (
        <>
            <div className="flex justify-center p-4">
                {(!pokemonData) ? (<div className="flex flex-col items-center justify-center min-h-[200px]">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                    <p className="mt-4 text-white text-lg">Loading Pokémon...</p>
                </div>) : (

                    <div className="flex justify-center p-4">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {pokemonData.filter((pokemon) => !searchTerm || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((pokemon, index) => (
                                    <li key={pokemon.name} className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform">
                                        <PokemonDetails pokemon={pokemon} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}