import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import { notFoungImg } from '../../assets/constants/index';
import goBack from '../../assets/images/goBack.png';

export default function Notfound() {
  return (
    <section className="not-foun-container">
      <p className="not-found-text">Page not found</p>
      <Link className="go-back-launch" to="/">
        <div className="go-back-icon"><img src={goBack} alt={goBack} /></div>
        <p>go back to launch page</p>
      </Link>
      <img src={notFoungImg} alt={notFoungImg} />
    </section>
  );
}
