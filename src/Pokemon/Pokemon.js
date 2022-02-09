import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  console.log('||pokemon', pokemon);
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <figure>
          <img src={pokemon.url_image} alt={pokemon.pokemon} />
          <figcaption>{pokemon.pokemon}</figcaption>
        </figure>    
      </Link>

    </>
  );
}
