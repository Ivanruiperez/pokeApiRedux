/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import closePokeball from '../../assets/images/closePokeball.png';
import openPokeball from '../../assets/images/openPokeball.png';
import './PokemonListItem.scss';

function PokemonListItem({ pokemon }) {
  const [statePokeball, setStatePokeball] = useState(closePokeball);
  const [sprite, setSprite] = useState(false);
  const type = pokemon.types[0].type.name;
  const pokeSprite = pokemon.sprites.front_default;
  return (
    pokemon && (
      <li
        className={`boxListItem ${type}`}
        onMouseOver={() => {
          setSprite(true);
          setStatePokeball(openPokeball);
        }}
        onMouseOut={() => {
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
    )
  );
}

export default PokemonListItem;
