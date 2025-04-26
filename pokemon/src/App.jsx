import { useState } from 'react';
import './App.css'
import { PokemonList } from './components/PokemonList'
import { Search } from './components/Search'


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className='w-full'>
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Pokemon Cards</h1>
        <Search  searchTerm={searchTerm} handleChange={handleChange}/>
        <PokemonList searchTerm = {searchTerm}/>
      </div>
    </>
  )
}

export default App
