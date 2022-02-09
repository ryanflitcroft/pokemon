import React from 'react';

export default function Pokemon({ pokemon }) {
  console.log('||pokemon', pokemon);
  return (
    <>
      <figure>
        <img src={pokemon.url_image} alt={pokemon.pokemon} />
        <figcaption>{pokemon.pokemon}</figcaption>
      </figure>
    </>
  );
}
