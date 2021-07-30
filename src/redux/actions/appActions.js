/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadPokemonList(pokemonList) {
  return {
    type: actionTypes.LOAD_POKEMON_LIST,
    pokemonList,
  };
}

export function loadPokemonDetail(pokemonDetail) {
  return {
    type: actionTypes.LOAD_POKEMON_DETAIL,
    pokemonDetail,
  };
}

export function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}
export function requestPokemonDetail(pokemonDetails) {
  return (dispatch) => {
    Promise.all(pokemonDetails.map(async (detail) => {
      const FullDetail = await axios.get(detail.url);
      return FullDetail;
    }))
      .then((data) => {
        const newArr = data.map((detail) => detail.data);
        dispatch(loadPokemonDetail(newArr));
      })
      .catch((error) => dispatch(loadError(error)));
  };
}

export function requestPokemonList() {
  return async (dispatch) => {
    const backEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    try {
      const rawData = await axios.get(backEndpoint);

      dispatch(requestPokemonDetail(rawData.data.results));
      dispatch(loadPokemonList(rawData.data.results));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
