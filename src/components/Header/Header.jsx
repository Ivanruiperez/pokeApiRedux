/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.scss';
import toggle from '../../assets/images/large-notch-darkgray.png';
import Dropdown from '../Dropdown/Dropdown';

export default function Header() {
  return (
    <>
      <section className="header-container">
        <Dropdown />
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
