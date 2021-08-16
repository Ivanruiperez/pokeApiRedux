import React from 'react';
import './Header.scss';
import toggle from '../../assets/images/large-notch-darkgray.png';
import SearchInput from '../SearchInput/SearchInput';
import Dropdown from '../Dropdown/Dropdown';
import { headerText } from '../../assets/constants/index';

export default function Header({ pokemonDetail, setPokeFilter, actualGen }) {
  return (
    <>
      <section className="header-container">
        <div className="header-container-box">
          <SearchInput pokemonDetail={pokemonDetail} setPokeFilter={setPokeFilter} />
        </div>
        <div className="header-container-box">
          <section>
            <Dropdown pokemonDetail={pokemonDetail} actualGen={actualGen} />
            <p className="header-container-text">
              {headerText}
            </p>
          </section>
        </div>
        <div className="header-container-box" />
      </section>
      <div className="toogle" />
      <div className="sub-toogle">
        <div className="toogle1">
          <img src={toggle} alt="toggle" />
        </div>
        <div className="toogle2" />
        <div className="toogle3">
          <img src={toggle} alt="toggle" />
        </div>
      </div>
    </>
  );
}
