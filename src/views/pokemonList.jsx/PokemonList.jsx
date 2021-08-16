import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { clearStore, requestPokemonList } from '../../redux/actions/appActions';
import './PokemonList.scss';
import Header from '../../components/Header/Header';
import PokemonListItem from '../../components/PokemonListItem/pokemonListItem';
import Loading from '../../components/Loading/Loading';
import { firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';

function PokemonList({ pokemonDetail, searchString }) {
  const [actualGen, setActualGen] = useState(null);
  const [pokeFilter, setPokeFilter] = useState(null);
  const template = () => (
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
  useEffect(() => {
    switch (pokemonDetail?.length) {
      case 151:
        setActualGen('generation 1');
        break;
      case 100:
        setActualGen('generation 2');
        break;
      case 135:
        setActualGen('generation 3');
        break;
      case 107:
        setActualGen('generation 4');
        break;
      case 156:
        setActualGen('generation 5');
        break;
      case 72:
        setActualGen('generation 6');
        break;
      case 88:
        setActualGen('generation 7');
        break;
      default:
        break;
    }
  }, [pokemonDetail?.length]);
  return (
    <>
      <section className="pokemon-list-container">
        <Header
          pokemonDetail={pokemonDetail}
          setPokeFilter={setPokeFilter}
          actualGen={actualGen}
        />
        {!pokemonDetail
          ? (
            <Loading />
          )
          : (
            <section className="pokemon-list-box">
              {searchString !== '' && !pokeFilter?.length
                ? <p>No coincidencias</p>
                : template()}
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
