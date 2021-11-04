import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form /> {/*Component*/}
        <Switch>
          <Route path="/people/:id">
            <People /> {/*Component*/}
          </Route>
          <Route path="/planets/:id">
            <Planet /> {/*Component*/}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;