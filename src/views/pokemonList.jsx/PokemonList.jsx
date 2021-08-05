/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './PokemonList.scss';
import PokemonListItem from '../../components/PokemonListItem/PokemonListItem';
import Launch from '../../components/Launch/Launch';

function PokemonList({ pokemonDetail }) {
  return (
    (!pokemonDetail)
      ? (
        <Launch />
      ) : (
        <section className="pokemon-list-box">
          <ul className="pokemon-list">
            {pokemonDetail && pokemonDetail.map((pokemon) => (
              <PokemonListItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </ul>
        </section>
      )

  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
  };
}

export default connect(mapStateToProps)(PokemonList);
