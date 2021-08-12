import React from 'react';
import './PokeMoves.scss';

export default function PokeMoves({ move }) {
  return (
    <li className="poke-move-list-item">
      <div className={`poke-move-type ${move.type.name}type`}>
        {move.name}
      </div>
    </li>
  );
}
