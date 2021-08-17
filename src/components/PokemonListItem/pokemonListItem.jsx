import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import closePokeball from '../../assets/images/closePokeball.png';
import openPokeball from '../../assets/images/openPokeball.png';
import { clearString } from '../../redux/actions/appActions';
import './PokemonListItem.scss';

function PokemonListItem({ pokemon }) {
  const dispatch = useDispatch();
  const [statePokeball, setStatePokeball] = useState(closePokeball);
  const [sprite, setSprite] = useState(false);
  const type = pokemon.types[0].type.name;
  const pokeSprite = pokemon.sprites.front_default;
  return (
    pokemon && (
      <Link
        to={`/detail/${pokemon.name}`}
        key={pokemon.name}
        onClick={() => dispatch(clearString())}
      >
        <li
          className={`boxListItem ${type}`}
          onMouseOver={() => {
            setSprite(true);
            setStatePokeball(openPokeball);
          }}
          onFocus={() => {
            setSprite(true);
            setStatePokeball(openPokeball);
          }}
          onMouseOut={() => {
            setStatePokeball(closePokeball);
            setSprite(false);
          }}
          onBlur={() => {
            setStatePokeball(closePokeball);
            setSprite(false);
          }}
        >
          <div className="listItem">
            <img
              src={statePokeball}
              height="20px"
              alt="pokeball"
            />
            {!sprite ? (
              <p>
                {pokemon.name}
              </p>
            ) : <img src={pokeSprite} alt="sprite" />}

          </div>
        </li>
      </Link>
    )
  );
}

export default PokemonListItem;
