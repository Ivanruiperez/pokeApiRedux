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
  const [pokeDetail, setPokeDetail] = useState(null);

  useEffect(() => {
    if (pokemonDetail) {
      setPokeDetail(pokemonDetail?.filter((pokeName) => pokeName.name === id));
    }
  }, [pokemonDetail]);
  useEffect(() => {
    if (pokeDetail) {
      dispatch(requestPokemonMoves(pokeDetail[0].moves));
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
          <h1>{pokeDetail[0].name}</h1>
          <section className="poke-details">
            <div className="sprite">
              <img
                src={pokeDetail[0]?.sprites.other.dream_world.front_default}
                alt={pokeDetail[0]?.sprites.other.dream_world.front_default}
              />
              <div className="poke-types">
                {pokeDetail[0].types.map((type) => (
                  <span>
                    <p className={type.type.name}>
                      {type.type.name}
                    </p>
                  </span>
                ))}
              </div>
            </div>
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
