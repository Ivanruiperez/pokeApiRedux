import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestPokemonList } from '../../redux/actions/appActions';
import {
  options, dropDownActivate, dropDownDisabled,
} from '../../assets/constants/index';
import Arrow from '../../assets/images/arrow.svg';
import './Dropdown.scss';

export default function Dropdown() {
  const dispatch = useDispatch();
  const [genSelected, setGenSelected] = useState(null);
  const [limit, setLimit] = useState(null);
  const [offset, setOffset] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    switch (genSelected) {
      case 'generation 1':
        setLimit('151');
        setOffset('0');
        break;
      case 'generation 2':
        setLimit('100');
        setOffset('151');
        break;
      case 'generation 3':
        setLimit('135');
        setOffset('251');
        break;
      case 'generation 4':
        setLimit('107');
        setOffset('386');
        break;
      case 'generation 5':
        setLimit('156');
        setOffset('493');
        break;
      case 'generation 6':
        setLimit('72');
        setOffset('649');
        break;
      case 'generation 7':
        setLimit('88');
        setOffset('721');
        break;
      default:
        setLimit(null);
        setOffset(null);
        break;
    }
  }, [genSelected]);
  useEffect(() => {
    if (limit && offset) {
      dispatch(requestPokemonList(limit, offset));
    }
  }, [limit, offset]);

  return (
    <>
      <div className="select-box">
        <div
          className="select"
          onClick={() => setIsOpen(!isOpen)}
          role="menuitem"
          tabIndex="0"
          aria-hidden="true"
        >
          <p className="select-header">
            {genSelected || 'Choose generation'}
          </p>
          <div
            className={isOpen ? dropDownActivate : dropDownDisabled}
          >
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
        {isOpen ? (
          <div className="select-dropdown">
            {options.map((item) => (
              <div
                className="select-dropdown-item"
                onClick={() => {
                  setGenSelected(item.value);
                  setIsOpen(false);
                }}
                key={item.value}
                role="menuitem"
                tabIndex="0"
                aria-hidden="true"
              >
                <p>{item.label}</p>
                <div className="initials">
                  <img src={item.initials.first} alt={item.initials.first} />
                  <img src={item.initials.second} alt={item.initials.second} />
                  <img src={item.initials.third} alt={item.initials.third} />
                </div>
              </div>
            ))}

          </div>
        ) : null}
        <div>
          {genSelected
            && (
              options.map((item) => (
                item.value === genSelected
                  && (
                  <section className="sprites" key={item.value}>
                    <img src={item.initials.fist} alt={item.initials.fist} />
                    <img src={item.initials.second} alt={item.initials.second} />
                    <img src={item.initials.third} alt={item.initials.third} />
                  </section>
                  )
              ))

            )}

        </div>
      </div>
    </>
  );
}
