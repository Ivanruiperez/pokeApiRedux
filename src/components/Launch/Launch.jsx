import React from 'react';
import Typewriter from 'typewriter-effect';
import ProfesorOak from '../../assets/images/Profesor_Oak.png';
import { oakPhrase } from '../../assets/constants/index';
import './Launch.scss';

export default function Launch() {
  return (
    <div className="oak">
      <section>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(25)
              .typeString(oakPhrase)
              .start();
          }}
        />
      </section>
      <img src={ProfesorOak} alt="Oak" />

    </div>
  );
}
