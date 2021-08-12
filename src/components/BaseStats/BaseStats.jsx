import React from 'react';
import './BaseStats.scss';

export default function BaseStats({ pokeStats }) {
  return (
    <>
      <h5>Base Stats</h5>
      {pokeStats && (
        pokeStats.map((stat) => (
          <span className="poke-stat-box" key={stat.stat.name}>
            <p>{stat.stat.name}</p>
            <figure className="poke-stat">
              <span className="poke-stat-bar" style={{ width: `${stat.base_stat}px` }}>
                <div className="poke-stat-bar-animation" />
              </span>
            </figure>
          </span>
        ))
      )}
    </>
  );
}