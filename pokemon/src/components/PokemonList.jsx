import { useEffect, useState } from "react";
import { PokemonDetails } from "./PokemonDetails";
import { Pagination } from "./Pagination";

export const PokemonList = ({ searchTerm, handleStats }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);  // State to track the current page
    const [totalPages, setTotalPages] = useState(0);  // Total number of pages (based on filtered results)

    const limit = 21;  // Number of Pokémon to display per page

    // Fetch Pokémon data
    useEffect(() => {
        const fetchPokemonData = async () => {
            setLoading(true);
            try {
                const pokemon_raw_data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000"); // Fetch a large enough dataset
                const pokemon_json_data = await pokemon_raw_data.json();
                setPokemonData(pokemon_json_data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, []);

    // Reset page to 1 when the search term changes
    useEffect(() => {
        setPage(1);  // Reset to the first page when search term changes
    }, [searchTerm]);

    // Filter Pokémon based on the search term
    const filteredPokemonData = pokemonData.filter((pokemon) =>
        !searchTerm || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the total pages based on filtered data
    useEffect(() => {
        setTotalPages(Math.ceil(filteredPokemonData.length / limit));  // Total pages for filtered data
    }, [filteredPokemonData]);

    // Paginate filtered data
    const paginatedPokemonData = filteredPokemonData.slice((page - 1) * limit, page * limit);

    // Handle Next and Previous Page
    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);  // Move to the next page
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);  // Move to the previous page
    };

    return (
        <div>
            {/* Pagination Controls */}
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />

            <div className="flex justify-center p-4">
                {loading ? (
                    <div className="flex flex-col items-center justify-center min-h-[200px]">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                        <p className="mt-4 text-white text-lg">Loading Pokémon...</p>
                    </div>
                ) : (
                    <div className="flex justify-center p-4">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {paginatedPokemonData.map((pokemon) => (
                                <li
                                    key={pokemon.name}
                                    className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
                                >
                                    <PokemonDetails pokemon={pokemon} handleStats={handleStats} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
        </div>
    );
};
