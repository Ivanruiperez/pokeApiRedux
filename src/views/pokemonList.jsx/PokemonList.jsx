import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { clearStore, requestPokemonList } from '../../redux/actions/appActions';
import './PokemonList.scss';
import Header from '../../components/Header/Header';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';
import Loading from '../../components/Loading/Loading';
import { firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';

function PokemonList({ pokemonDetail }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!pokemonDetail) {
      dispatch(requestPokemonList(lastPokemonIndex, firstPokemonIndex));
    }
  }, []);
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
