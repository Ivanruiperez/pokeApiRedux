import React, { useState } from 'react';
import './SearchInput.scss';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/actions/appActions';
import findIcon from '../../assets/images/find-icon.png';

export default function SearchInput({ pokemonDetail, setPokeFilter }) {
  const [searchPoke, setSearchPoke] = useState([]);
  const dispatch = useDispatch();
  function hadleSearchClick(item) {
    dispatch(updateSearchString(item));
    setPokeFilter(pokemonDetail?.filter((filterPoke) => filterPoke.name.includes(item)));
  }

  return (
    <section className="filter-box">
      <input
        className="filter-input"
        type="text"
        placeholder="Search Pokemon"
        onChange={(event) => setSearchPoke(event?.target?.value)}
      />
      <div
        className="filter-button"
        onClick={() => {
          hadleSearchClick(searchPoke);
        }}
        aria-hidden="true"
      >
        <img src={findIcon} alt={findIcon} />
      </div>
    </section>
  );
}
