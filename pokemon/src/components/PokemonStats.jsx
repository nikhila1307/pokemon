export const PokemonStats = ({ pokemon , handleBackStats}) => {

    if (!pokemon) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                <p>Loading...</p>
            </div>
        );
    }

    // Helper function to clean up stat names
    const formatStatName = (statName) => {
        switch (statName) {
            case "hp":
                return "HP";
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "special-attack":
                return "Special Attack";
            case "special-defense":
                return "Special Defense";
            case "speed":
                return "Speed";
            default:
                return statName;
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-2xl m-6">
            {/* Back Button */}
            <button
                onClick={handleBackStats}
                className="text-indigo-700 bg-white px-6 py-2 rounded-lg shadow-md mb-2 hover:bg-indigo-300 transition font-bold"
            >
            Back
            </button>
            {/* Left - Pokemon Image */}
            <div className="flex-shrink-0">
                <img
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt={pokemon.name}
                    className="w-72 h-72 object-contain rounded-2xl bg-white p-4 shadow-lg"
                />
            </div>

            {/* Right - Pokemon Stats */}
            <div className="flex flex-col justify-center w-full text-white">
                <h2 className="text-4xl font-extrabold capitalize mb-6 tracking-wide text-center md:text-left">{pokemon.name}</h2>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-inner">
                    <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-center md:text-left text-indigo-700">Base Stats</h3>

                    <ul className="space-y-4">
                        {pokemon.stats.map((statItem) => (
                            <li
                                key={statItem.stat.name}
                                className="flex justify-between items-center text-lg"
                            >
                                {/* Label */}
                                <span className="capitalize font-semibold text-indigo-700">{formatStatName(statItem.stat.name)}</span>

                                {/* Value */}
                                <span className="font-bold text-white bg-indigo-500 px-3 py-1 rounded-full">
                                    {statItem.base_stat}
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    );
}