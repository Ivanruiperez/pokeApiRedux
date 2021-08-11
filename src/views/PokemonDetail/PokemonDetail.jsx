/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPokemonMove, requestPokemonMoves, requestPokemonList } from '../../redux/actions/appActions';
import Loading from '../../components/Loading/Loading';
import { firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';

export function PokemonDetail({ pokemonDetail, pokemonMove }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState(null);

  useEffect(() => {
    if (pokemonDetail) {
      setPokeDetail(pokemonDetail?.filter((pokeName) => pokeName.name === id));
    }
  }, [pokemonDetail]);
  useEffect(() => {
    if (pokeDetail) {
      dispatch(requestPokemonMoves(pokeDetail[0].moves));
    }
  }, [pokeDetail]);
  useEffect(() => {
    if (!pokemonMove) {
      dispatch(loadPokemonMove);
    }
  }, [pokeDetail]);
  useEffect(() => {
    if (!pokemonDetail) {
      dispatch(requestPokemonList(lastPokemonIndex, firstPokemonIndex));
    }
  }, []);
  console.log(pokeDetail);
  return (

    pokeDetail
      ? <div>{pokeDetail[0].name}</div>
      : <Loading />
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
    pokemonMove: pokeReducer.pokemonMove,
  };
}

export default connect(mapStateToProps)(PokemonDetail);
