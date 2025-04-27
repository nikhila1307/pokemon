export const PokemonCard = ({ pokemon, handleStats }) => {

    const handleClick = () => {
        handleStats(pokemon);
    };

    const typeColors = {
        fire: "bg-red-500",
        water: "bg-blue-500",
        grass: "bg-green-500",
        electric: "bg-yellow-500",
        psychic: "bg-purple-500",
        poison: "bg-purple-700",  // Poison type color
        bug: "bg-green-700",      // Bug type color
        normal: "bg-gray-400",
        flying: "bg-blue-300",  // Flying type color (light blue)
        ground: "bg-yellow-800", // Ground type color (brown)
        fairy: "bg-pink-500", 
        fighting: "bg-red-700",  // Fighting type color (dark red)
        steel: "bg-gray-500",    // Steel type color (metallic gray)
        ice: "bg-blue-200",      // Ice type color (light blue)
        ghost: "bg-indigo-500",
        dragon: "bg-teal-600",
        dark: "bg-gray-800"
    };

    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-4 cursor-pointer hover:scale-105 transition-all"
            onClick={handleClick}
        >
            <img
                className="w-40 h-25 object-contain mb-4 mx-auto"
                src={pokemon.sprites?.other.dream_world.front_default}
                alt={pokemon.name || "Pokemon"}
                onError={(e) => e.target.src = "/path/to/fallback-image.jpg"}  // Fallback image for broken image links
            />
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">{pokemon.name}</h2>
                <div className="flex justify-center gap-4 mt-2">
                    <p className="text-gray-600">Height: {pokemon.height}</p>
                    <p className="text-gray-600">Weight: {pokemon.weight}</p>
                </div>

                <p className="text-gray-600 mt-2">Types:</p>
                <ul className="flex justify-center gap-2 mt-2">
                    {pokemon.types.map((type) => (
                        <li
                            key={type.type.name}
                            className={`px-4 py-1 text-sm font-medium rounded-full text-white ${typeColors[type.type.name] || 'bg-gray-500'}`}
                        >
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
