import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {

  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <hr />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/:str/:strColor/:bkgdColor'>
          <Word />
        </Route>
        <Route exact path='/:int'>
          <Number />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default App;