import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
  let updatedState;
  switch (action.type) {
    case actionTypes.LOAD_POKEMON_LIST:
      updatedState = { ...state, pokemonList: action.pokemonList };
      break;
    case actionTypes.LOAD_ERROR:
    default:
      updatedState = state;
      break;
  }

  return updatedState;
}
