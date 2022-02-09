import './App.css';

import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PokemonPage from './Pokemon/PokemonPage';
import PokemonDetail from './Pokemon/PokemonDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <PokemonPage />
        </Route>
        <Route exact path='/pokemon/:id'>
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;