import React from 'react';
import './FilterNotFound.scss';
import filterNotFound from '../../assets/images/filterNotFound.png';

export default function FilterNotFound() {
  return (
    <section className="filter-notfound-box">
      <img src={filterNotFound} alt={filterNotFound} />
      <p>There is no pokemon with this name...</p>
    </section>
  );
}
