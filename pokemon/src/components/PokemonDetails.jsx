import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonDetails = ({ pokemon }) => {
    const [pokemonStats, setPokemonStats] = useState(null)
    const { name, url } = pokemon;

    useEffect(() => {
        // Define async function inside the useEffect
        const fetchPokemonDetails = async () => {
            try {
                const pokemon_raw_data = await fetch(`${url}`);
                const pokemon_json_data = await pokemon_raw_data.json();
                setPokemonStats(pokemon_json_data)


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPokemonDetails();
    }, []);

    return (


        <>
            {(!pokemonStats) ? <p> LOADING.........</p> :

                (<PokemonCard pokemon={pokemonStats} />)
            }
        </>
    )

}