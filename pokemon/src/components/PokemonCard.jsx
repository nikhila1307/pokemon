export const PokemonCard = ({pokemon}) => {



    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey p-4">
            <img
                className="w-full h-48 object-cover mb-4"
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
            />
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                    {pokemon.name}
                </h2>
                <div className="flex justify-center gap-4">
                <p className="text-gray-600">Height: {pokemon.height}</p>
                <p className="text-gray-600">Weight: {pokemon.weight}</p>
                </div>
               
                <p className="text-gray-600">Types:</p>
                <ul className="flex justify-center gap-2">
                    {pokemon.types.map((type) => (
                        <li
                            key={type.type.name}
                            className="px-4 py-1 text-sm font-medium rounded-full text-white bg-gray-500"
                        >
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    );
}