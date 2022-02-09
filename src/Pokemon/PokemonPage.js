import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from '../services/fetch-utils';



export default function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;

  useEffect(() => {
    async function getData() {
      const start = page * PER_PAGE - PER_PAGE + 1;
      const end = page * PER_PAGE;
      // console.log('||start', start, 'end', end);
      const data = await getPokemon(start, end);
      console.log('||data', data);
      setPokemon(data);

    }
    getData();
    console.log('||pokemon', pokemon);
  }, [page]);

  return (
    <>
      <span>{page}</span>
      <button onClick={() => setPage(page - 1)}
        disabled={(page === 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}
        disabled={(pokemon.length < PER_PAGE)}>Next</button>
    </>
  );
}
