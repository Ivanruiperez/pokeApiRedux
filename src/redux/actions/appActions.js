import axios from 'axios';
import actionTypes from './actionTypes';

function loadPokemonList(pokemonList) {
  return {
    type: actionTypes.LOAD_POKEMONS,
    pokemonList,
  };
}

function loadError(error) {
  return {
    type: actionTypes.LOAD_POKEMONS_ERROR,
    error,
  };
}

export default function requestPokemonList() {
  return async (dispatch) => {
    const backEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    try {
      const listData = await axios.get(backEndpoint);
      dispatch(loadPokemonList(listData.data.results));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
