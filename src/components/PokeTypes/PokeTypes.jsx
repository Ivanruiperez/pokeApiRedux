import React from 'react';
import './PokeTypes.scss';

export default function PokeTypes({ type }) {
  return (
    <div className="poke-types" key={type.type.name}>
      <span>
        <p className={type.type.name}>
          {type.type.name}
        </p>
      </span>
    </div>
  );
}
