import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemonArray }) {
  // console.log('||pokemonArray', pokemonArray);
  return (
    <div>
      {pokemonArray.map((pokemon, i) => 
        <Pokemon key={pokemon + i} pokemon={pokemon} />
      )}
    </div>
  );
}
