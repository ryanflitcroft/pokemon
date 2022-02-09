import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from '../services/fetch-utils';
import PokemonList from './PokemonList';


export default function PokemonPage() {

  const [pokemonArray, setPokemonArray] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;

  useEffect(() => {
    async function getData() {
      const start = page * PER_PAGE - PER_PAGE + 1;
      const end = page * PER_PAGE;
      const data = await getPokemon(start, end);
      setPokemonArray(data);

    }
    getData();
  }, [page]);

  return (
    <>
      <span>{page}</span>
      <button onClick={() => setPage(page - 1)}
        disabled={(page === 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}
        disabled={(pokemonArray.length < PER_PAGE)}>Next</button>
      <PokemonList pokemonArray={pokemonArray} />
    </>
  );
}
