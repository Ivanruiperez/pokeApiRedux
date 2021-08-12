import React from 'react';
import './PokeMoves.scss';

export default function PokeMoves({ move }) {
  return (
    <li className="poke-move-list-item">
      <div className={`poke-move-type ${move.type.name}`}>
        {move.name}
      </div>
    </li>
  );
}
