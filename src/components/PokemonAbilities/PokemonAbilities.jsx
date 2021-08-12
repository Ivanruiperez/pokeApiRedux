import React, { useState } from 'react';
import './PokemonAbilities.scss';

export default function PokemonAbilities({ ability }) {
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <span
      className="poke-ability-item"
      key={ability.name}
      onMouseOver={() => {
        setOpenTooltip(!openTooltip);
      }}
      onFocus={() => {
        setOpenTooltip(!openTooltip);
      }}
      onMouseOut={() => {
        setOpenTooltip(!openTooltip);
      }}
      onBlur={() => {
        setOpenTooltip(!openTooltip);
      }}
    >
      <p className="poke-ability-name">
        {ability.name}
      </p>
      {openTooltip && (
      <span className="poke-ability-tooltip" key={ability.id}>
        <p>
          {ability.flavor_text_entries[0].flavor_text}
        </p>
      </span>
      )}
    </span>
  );
}
