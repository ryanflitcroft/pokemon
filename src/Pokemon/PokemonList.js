import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemonArray }) {
  return (
    <>
      <h2>Gotta Catch &apos;Em All</h2>
      <section>
        {pokemonArray.map((pokemon, i) => 
          <Pokemon key={pokemon + i} pokemon={pokemon} />
        )}
      </section>
    </>
  );
}