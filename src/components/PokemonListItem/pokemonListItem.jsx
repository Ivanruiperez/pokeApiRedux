/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import closePokeball from '../../assets/images/closePokeball.png';
import openPokeball from '../../assets/images/openPokeball.png';
import './styles.css';

export function PokemonListItem({ pokemon }) {
  const [statePokeball, setStatePokeball] = useState(closePokeball);
  const [sprite, setSprite] = useState(false);

  return (
    pokemon && (
      <li
        className="boxListItem"
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
          {sprite ? <img src={pokemon.sprites.front_default} alt="sprite" />
            : null}
          <img
            src={statePokeball}
            height="20px"
            alt="pokeball"
          />
          {!sprite ? (
            <p>
              {' | '}
              {pokemon.name}
            </p>
          ) : null}

        </div>
      </li>
    )
  );
}

export default PokemonListItem;
