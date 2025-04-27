import { useState } from 'react';
import './App.css'
import { PokemonList } from './components/PokemonList'
import { Search } from './components/Search'
import { PokemonStats } from './components/PokemonStats'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState(false);
  const [pokemonStats, setPokemonStats] = useState("");

  const handleStats = (pokemon) => {

    setStats(true);
    setPokemonStats(pokemon);
  }

  const handleBackStats = () => {

    setStats(false);

  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className='w-full'>

        {(!stats) ? (<>
           <h1 className="text-4xl font-bold text-center mb-8 text-white">Pokemon Cards</h1>
          <Search searchTerm={searchTerm} handleChange={handleChange} />
          <PokemonList searchTerm={searchTerm} handleStats={handleStats} /></>) :
          <PokemonStats pokemon={pokemonStats} handleBackStats={handleBackStats} />}

      </div>
    </>
  )
}

export default App
