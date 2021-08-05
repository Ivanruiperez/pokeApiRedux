import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestPokemonList } from '../../redux/actions/appActions';

export default function Select() {
  const dispatch = useDispatch();
  const [genSelected, setGenSelected] = useState(null);
  const [limit, setLimit] = useState(null);
  const [offset, setOffset] = useState(null);
  useEffect(() => {
    switch (genSelected) {
      case 'gen1':
        setLimit('151');
        setOffset('0');
        break;
      case 'gen2':
        setLimit('100');
        setOffset('151');
        break;
      case 'gen3':
        setLimit('135');
        setOffset('251');
        break;
      case 'gen4':
        setLimit('107');
        setOffset('386');
        break;
      case 'gen5':
        setLimit('156');
        setOffset('493');
        break;
      case 'gen6':
        setLimit('72');
        setOffset('649');
        break;
      case 'gen7':
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

      <div>
        <p>Choose generation</p>
        <label htmlFor="generations">
          <select onChange={(event) => {
            setGenSelected(event.target.value);
          }}
          >
            <option value="gen0"> - </option>
            <option value="gen1">Generation 1</option>
            <option value="gen2">Generation 2</option>
            <option value="gen3">Generation 3</option>
            <option value="gen4">Generation 4</option>
            <option value="gen5">Generation 5</option>
            <option value="gen6">Generation 6</option>
            <option value="gen7">Generation 7</option>
          </select>
        </label>
      </div>

    </>
  );
}
