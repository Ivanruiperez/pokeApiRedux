import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Launch from './views/Launch/Launch';
import PokemonList from './views/PokemonList.jsx/PokemonList';
import PokemonDetail from './views/PokemonDetail/PokemonDetail';
import NotFound from './views/Notfound/NotFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <main className="mainContainer">
        <Switch>
          <Route path="/" exact component={Launch} />
          <Route path="/list" exact component={PokemonList} />
          <Route path="/detail/:id" exact component={PokemonDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>

    </BrowserRouter>
  );
}

export default App;
