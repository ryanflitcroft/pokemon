import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetail } from '../services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const [colors, setColors] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getPokemonDetail(params.id);
      setPokemon(data);
      (data.color_2 !== 'NA') ?
        setColors({ color_1: data.color_1, color_2: data.color_2 })
        :
        setColors({ color_1: data.color_1, color_2: data.color_1 });
    }
    getData();
  }, [params]);
  return (
    <>
      <h1>Pokémon</h1>
      <Link to='/'>Back</Link>
      <section>
        <figure style={{ backgroundImage: `linear-gradient(-20deg, ${colors.color_1} 0%, ${colors.color_2} 100%)` }}>
          <img src={pokemon.url_image} alt={pokemon.pokemon} />
          <figcaption>{pokemon.pokemon}</figcaption>
          <ul>
            <li>
              {pokemon.ability_1}
            </li>

            {
              (pokemon.ability_2 !== 'NA') &&
              <li>
                {pokemon.ability_2}
              </li>
            }

          </ul>
        </figure> 
      </section>
    </>
  );
}