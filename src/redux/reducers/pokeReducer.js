import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
  let updatedState;
  switch (action.type) {
    case actionTypes.CLEAR:
      updatedState = { ...state, pokemonDetail: action.clear };
      break;
    case actionTypes.LOAD_POKEMON_DETAIL:
      updatedState = { ...state, pokemonDetail: action.pokemonDetail };
      break;
    case actionTypes.LOAD_POKEMON_MOVE:
      updatedState = { ...state, pokemonMove: action.pokemonMove };
      break;
    case actionTypes.LOAD_POKEMON_ABILITY:
      updatedState = { ...state, pokemonAbility: action.pokemonAbility };
      break;
    case actionTypes.LOAD_ERROR:
    default:
      updatedState = state;
      break;
  }

  return updatedState;
}
