/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './PokemonList.scss';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';
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
