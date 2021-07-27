/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import closePokeball from '../../assets/images/closePokeball.png';
import openPokeball from '../../assets/images/openPokeball.png';

export default function PokemonListItem({ pokeName }) {
  const [statePokeball, setStatePokeball] = useState(closePokeball);
  return (
    <li
      onMouseOver={() => setStatePokeball(openPokeball)}
      onMouseOut={() => setStatePokeball(closePokeball)}
    >
      <div className="pokemon">
        <img
          src={statePokeball}
          height="20px"
          alt="pokeball"
        />
        {' | '}
        {pokeName}
      </div>
    </li>
  );
}
