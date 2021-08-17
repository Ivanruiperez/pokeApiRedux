import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { clearStore, requestPokemonList } from '../../redux/actions/appActions';
import './PokemonList.scss';
import Header from '../../components/Header/Header';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';
import Loading from '../../components/Loading/Loading';
import FilterNotFound from '../../components/FilterNotFound/FilterNotFound';
import { firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';

function PokemonList({ pokemonDetail, searchString }) {
  const [pokeFilter, setPokeFilter] = useState(null);
  const pokeListItemTemplate = () => (
    <ul className="pokemon-list">
      {searchString !== '' && pokeFilter?.length
        ? pokeFilter.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        ))
        : pokemonDetail && pokemonDetail.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        ))}
    </ul>
  );
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
        <Header
          pokemonDetail={pokemonDetail}
          setPokeFilter={setPokeFilter}
        />
        {!pokemonDetail
          ? (
            <Loading />
          )
          : (
            <section className="pokemon-list-box">
              {searchString !== '' && !pokeFilter?.length
                ? <FilterNotFound />
                : pokeListItemTemplate()}
            </section>
          )}
      </section>
    </>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
    searchString: pokeReducer.searchString,
  };
}

export default connect(mapStateToProps)(PokemonList);
