/* eslint-disable no-unused-vars */
import React from 'react';
import './ModalMove.scss';

export default function ModalMove({
  onClose,
  move,
}) {
  let moveDescription;
  move.flavor_text_entries.map((moveDes) => {
    if (moveDes.language.name === 'en') {
      moveDescription = moveDes.flavor_text;
    }
    return moveDescription;
  });
  return (
    <section
      className="modal"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal-box"
        aria-hidden="true"
      >
        <h2>{move.name}</h2>
        <div className="modal-box-moves">
          <div className="modal-box-moves-stat">
            <p className="modal-moves-stat-name">
              Accuracy:
            </p>
            <p className="move-stat">{move.accuracy ? `${move.accuracy}%` : '100%'}</p>
          </div>
          <div className="modal-box-moves-stat">
            <p className="modal-moves-stat-name">
              Power:
            </p>
            <p className="move-stat">{move.power ? move.power : 'No damage'}</p>
          </div>
          <div className="modal-box-moves-stat">
            <p className="modal-moves-stat-name">
              Damage class:
            </p>
            <p className="move-stat">{move.damage_class.name}</p>
          </div>
          <div className="modal-box-moves-stat">
            <p className="modal-moves-stat-name">
              PP:
            </p>
            <p className="move-stat">{move.pp}</p>
          </div>
          <div className="modal-box-moves-stat">
            <p className="modal-moves-stat-name">
              Type:
            </p>
            <div className="move-stat">
              <p className={`${move.type.name}type type-shadow`}>{move.type.name}</p>
            </div>
          </div>
          <div className="modal-box-moves-stat-description">
            <p className="move-effects">
              Move effects:
            </p>
            <p className="move-effects-description">{moveDescription}</p>
          </div>
        </div>
        <div
          className="modal-close"
          onClick={onClose}
          aria-hidden="true"
        >
          Close
        </div>
      </div>
    </section>
  );
}
