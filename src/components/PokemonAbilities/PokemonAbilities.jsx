import React, { useState } from 'react';
import './PokemonAbilities.scss';

export default function PokemonAbilities({ ability }) {
  const [openTooltip, setOpenTooltip] = useState(false);
  let tooltip;
  ability.flavor_text_entries.map((abDescription) => {
    if (abDescription.language.name === 'en') {
      tooltip = abDescription.flavor_text;
    }
    return tooltip;
  });
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
          {tooltip}
        </p>
      </span>
      )}
    </span>
  );
}
