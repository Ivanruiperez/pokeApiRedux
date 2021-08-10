import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Launch from './views/Launch/Launch';
import PokemonList from './views/PokemonList.jsx/PokemonList';
import PokemonDetail from './views/PokemonDetail/PokemonDetail';
import Notfound from './views/Notfound/Notfound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <main className="mainContainer">
        <Switch>
          <Route path="/" exact component={Launch} />
          <Route path="/list" exact component={PokemonList} />
          <Route path="/detail/:id" exact component={PokemonDetail} />
          <Route component={Notfound} />
        </Switch>
      </main>

    </BrowserRouter>
  );
}

export default App;
