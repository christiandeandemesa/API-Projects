import React, {useState} from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const handleButton = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        return response.json();
      })
      .then(jsonresponse => {
        setPokemons(jsonresponse.results);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className="App">
      <button onClick = {handleButton}>Fetch Pokemon</button>
      <ol>
        {
          pokemons ? pokemons.map((pokemon, idx) => 
          <li key = {idx}>{pokemon.name.toUpperCase()}</li>
          ) : ''
        }
      </ol>
    </div>
  );

};

export default App;