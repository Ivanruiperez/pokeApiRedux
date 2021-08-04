import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import PokemonList from './views/PokemonList.jsx/PokemonList';
import Notfound from './components/Notfound/Notfound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <main className="mainContainer">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={PokemonList} />
          <Route component={Notfound} />
        </Switch>
      </main>

    </BrowserRouter>
  );
}

export default App;
