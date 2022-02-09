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

// ability_1: "keen-eye"
// ability_2: "tangled-feet"
// ability_hidden: "big-pecks"
// attack: 80
// base_experience: 216
// color_1: "#A8A878"
// color_2: "#A890F0"
// color_f: "#A8A295"
// defense: 75
// egg_group_1: "flying"
// egg_group_2: "NA"
// evolution_chain_id: "6"
// evolves_from_species_id: "17"
// generation_id: "1"
// height: 15
// hp: 83
// id: 23
// pokebase: "pidgeot"
// pokedex: "http://www.pokemon.com/us/pokedex/pidgeot"
// pokemon: "pidgeot"
// shape: "wings"
// shape_id: "9"
// special_attack: 70
// special_defense: 70
// species_id: 18
// speed: 101
// type_1: "normal"
// type_2: "flying"
// url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
// weight: 395
