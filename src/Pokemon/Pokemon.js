import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Pokemon({ pokemon }) {
  const [colors, setColors] = useState({});

  useEffect(() => {

    (pokemon.color_2 !== 'NA') ?
      setColors({ color_1: pokemon.color_1, color_2: pokemon.color_2 })
      :
      setColors({ color_1: pokemon.color_1, color_2: pokemon.color_1 });

  }, [pokemon]);
  
  return (
    <>
      <figure style={{ backgroundImage: `linear-gradient(-20deg, ${colors.color_1} 0%, ${colors.color_2} 100%)` }}>
        <img src={pokemon.url_image} alt={pokemon.pokemon} />
        <Link to={`/pokemon/${pokemon.id}`}>
          <figcaption>{pokemon.pokemon}</figcaption>
        </Link>
      </figure>    

    </>
  );
}
