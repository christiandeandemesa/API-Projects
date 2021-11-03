import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const handleButton = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        return response.data;
      })
      .then(dataresponse => {
        setPokemons(dataresponse.results);
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