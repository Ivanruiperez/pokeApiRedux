import React, { useState } from 'react';
import './PokeMoves.scss';
import ModalMove from '../ModalMove/ModalMove';

export default function PokeMoves({ move }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className="poke-move-list-item"
        onClick={() => setIsOpen(true)}
        aria-hidden="true"
      >
        <div className={`poke-move-type ${move.type.name}type`}>
          {move.name}
        </div>
      </li>
      {isOpen && (
        <ModalMove
          move={move}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
