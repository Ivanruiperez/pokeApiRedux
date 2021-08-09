import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearStore } from '../../redux/actions/appActions';
import './PokemonList.scss';
import Header from '../../components/Header/Header';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';
import Loading from '../../components/Loading/Loading';

function PokemonList({ pokemonDetail }) {
  useEffect(() => {
    clearStore();
  }, [pokemonDetail]);
  return (
    <>
      <section className="pokemon-list-container">
        <Header />
        {!pokemonDetail
          ? (
            <Loading />
          )
          : (
            <section className="pokemon-list-box">
              <ul className="pokemon-list">
                {pokemonDetail && pokemonDetail.map((pokemon) => (
                  <PokemonListItem key={pokemon.name} pokemon={pokemon} />
                ))}
              </ul>
            </section>
          )}
      </section>
    </>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
  };
}

export default connect(mapStateToProps)(PokemonList);
