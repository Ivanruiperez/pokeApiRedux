/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPokemonList } from '../../redux/actions/appActions';
import './styles.css';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';

function PokemonList({ pokemonList, dispatch }) {
  useEffect(() => {
    if (!pokemonList && !pokemonList?.length) {
      dispatch(requestPokemonList());
    }
  }, [pokemonList]);

  return (
    <main>
      <h1>Pokemon List</h1>
      <section className="pokemon-list">
        <ul className="col3">
          {pokemonList && pokemonList.map((pokemon) => (
            <PokemonListItem key={pokemon.name} pokeName={pokemon.name} />
          ))}
        </ul>
      </section>
    </main>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonList: pokeReducer.pokemonList,
  };
}

export default connect(mapStateToProps)(PokemonList);
