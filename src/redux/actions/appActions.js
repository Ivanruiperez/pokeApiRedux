import axios from 'axios';
import actionTypes from './actionTypes';

export function loadPokemonDetail(pokemonDetail) {
  return {
    type: actionTypes.LOAD_POKEMON_DETAIL,
    pokemonDetail,
  };
}
export function clearStore(clear) {
  return {
    type: actionTypes.CLEAR,
    clear,
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

export function requestPokemonList(limit, offset) {
  return async (dispatch) => {
    const backEndpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    try {
      const rawData = await axios.get(backEndpoint);
      dispatch(requestPokemonDetail(rawData.data.results));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
export function requestClearStore() {
  return (dispatch) => {
    try {
      dispatch(clearStore());
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
