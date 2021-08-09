import React from 'react';
import loadingPokeball from '../../assets/images/loadingPokeball.png';
import './Loading.scss';

export default function Loading() {
  return (
    <div className="pokeball">
      <img src={loadingPokeball} alt="pokeball" />
    </div>
  );
}
