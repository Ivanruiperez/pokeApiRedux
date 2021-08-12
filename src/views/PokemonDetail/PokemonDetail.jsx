import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPokemonMove, requestPokemonMoves, requestPokemonList } from '../../redux/actions/appActions';
import Loading from '../../components/Loading/Loading';
import { firstPokemonIndex, lastPokemonIndex } from '../../assets/constants/index';
import './PokemonDetail.scss';

export function PokemonDetail({ pokemonDetail, pokemonMove }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pokeDetailArr, setPokeDetailArr] = useState(null);
  const [pokeDetail, setPokeDetail] = useState(null);
  const [pokeSprite, setPokeSprite] = useState(null);
  const [pokeStats, setPokeStats] = useState(null);

  useEffect(() => {
    if (pokemonDetail) {
      setPokeDetailArr(pokemonDetail?.filter((pokeName) => pokeName.name === id));
    }
  }, [pokemonDetail]);
  useEffect(() => {
    if (pokeDetailArr) {
      setPokeDetail(pokeDetailArr[0]);
    }
  }, [pokeDetailArr]);
  useEffect(() => {
    if (pokeDetail) {
      dispatch(requestPokemonMoves(pokeDetail.moves));
      setPokeSprite(pokeDetail.sprites.other['official-artwork'].front_default);
      setPokeStats(pokeDetail.stats);
    }
  }, [pokeDetail]);
  useEffect(() => {
    if (!pokemonMove) {
      dispatch(loadPokemonMove);
    }
  }, [pokeDetail]);
  useEffect(() => {
    if (!pokemonDetail) {
      dispatch(requestPokemonList(lastPokemonIndex, firstPokemonIndex));
    }
  }, []);
  return (

    pokeDetail
      ? (
        <main className="poke-detail-section">
          <h1>{pokeDetail.name}</h1>
          <section className="poke-details">
            <section className="poke-details_box">
              <div className="sprite">
                <img
                  src={pokeSprite}
                  alt="pokeDetail"
                />
              </div>
              <div className="poke-types">
                {pokeDetail.types.map((type) => (
                  <span>
                    <p className={type.type.name}>
                      {type.type.name}
                    </p>
                  </span>
                ))}
              </div>
            </section>
            <section className="poke-details_box">
              <div className="poke-stats-container">
                <h5>Base Stats</h5>
                {pokeStats && (
                  pokeStats.map((stat) => (
                    <span className="poke-stat-box">
                      <p>{stat.stat.name}</p>
                      <figure className="poke-stat">
                        <span className="poke-stat-bar" style={{ width: `${stat.base_stat}px` }}>
                          <div className="poke-stat-bar-animation" />
                        </span>
                      </figure>
                    </span>
                  ))
                )}
              </div>
            </section>
          </section>
        </main>
      )
      : <Loading />
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonDetail: pokeReducer.pokemonDetail,
    pokemonMove: pokeReducer.pokemonMove,
  };
}

export default connect(mapStateToProps)(PokemonDetail);
