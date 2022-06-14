import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import { useEffect, useState } from 'react';
import SearchIcon from './images/icons/search.svg';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const App = () => {
  const [pokemon, setPokemon] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchPokemon(searchTerm,true)
    }
  }


  const searchPokemon = async (name,bool = false) => {
    if (bool) { 
    const response = await fetch(`${API_URL}${name.toLowerCase()}`);
    const data = await response.json();

    setPokemon(data);
    console.log(data);
    bool = false;
    }
  }
// useEffect(() => {
//   searchPokemon('');
// }, [])

  return (
    <div className="app">
      <div className="topbar">
        <h1 className="title">PokeDB</h1>

        <div className="search">
          <input 
            placeholder="Search for Pokemon"
            value={searchTerm}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
          src={SearchIcon}
          height="48px"
          alt='Search'
          onClick={() => searchPokemon(searchTerm,true)}
          />
        </div>
        </div>
        
        {pokemon.name
        ? (
          <div className="container">
        <Pokemon pokemon={pokemon} />   
        </div>
        ) : (
          <div className="empty">
            <h1>No Pokemon found.</h1>
            </div>
        ) }

</div>
    );
}

export default App;