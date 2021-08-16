import React, { useState } from 'react';
import './SearchInput.scss';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/actions/appActions';
import findIcon from '../../assets/images/find-icon.png';

export default function SearchInput({ pokemonDetail, setPokeFilter }) {
  const [searchInput, setSearchInput] = useState(false);
  const [searchPoke, setSearchPoke] = useState([]);
  const dispatch = useDispatch();
  function hadleSearchChange(item) {
    setSearchPoke(item);
    dispatch(updateSearchString(searchPoke));
    setPokeFilter(pokemonDetail?.filter((filterPoke) => filterPoke.name.includes(item)));
  }

  return (
    <section className="filter-box">
      <div className="filter-button">
        <button
          type="button"
          onClick={() => {
            setSearchInput(!searchInput);
          }}
          aria-hidden="true"
          disabled={!pokemonDetail}
        >
          <img src={findIcon} alt={findIcon} />
        </button>
      </div>
      {searchInput
      && (
      <input
        className="filter-input"
        type="text"
        placeholder="Search Pokemon"
        onChange={(event) => {
          hadleSearchChange(event?.target?.value);
        }}
      />
      )}

    </section>
  );
}
