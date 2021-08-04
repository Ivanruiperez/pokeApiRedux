/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPokemonList } from '../../redux/actions/appActions';
import './styles.scss';
import { PokemonListItem } from '../../components/PokemonListItem/PokemonListItem';

function PokemonList({ pokemonDetail, dispatch }) {
  useEffect(() => {
    if (!pokemonDetail) { dispatch(requestPokemonList()); }
  }, [pokemonDetail]);
  return (
    <section className="pokemon-list">
      <ul className="col3">
        {pokemonDetail && pokemonDetail.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </section>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
  };
}

export default connect(mapStateToProps)(PokemonList);
