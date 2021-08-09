import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { requestPokemonList } from '../../redux/actions/appActions';
import ProfesorOak from '../../assets/images/Profesor_Oak.png';
import { oakPhrase, firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';
import './Launch.scss';

export default function Launch() {
  const dispatch = useDispatch();
  return (
    <div className="oak">
      <section>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(25)
              .typeString(oakPhrase)
              .start();
          }}
        />
      </section>
      <img src={ProfesorOak} alt={ProfesorOak} />
      <Link to="/list/">
        <button
          className="pokedexButton"
          type="button"
          label="Pokedex"
          onClick={() => dispatch(requestPokemonList(lastPokemonIndex, firstPokemonIndex))}
        >
          Pokedex
        </button>
      </Link>
    </div>
  );
}
