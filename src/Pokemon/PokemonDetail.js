import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetail } from '../services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  console.log('||params', params);
  
  useEffect(() => {
    async function getData() {
      const data = await getPokemonDetail(params.id);
      setPokemon(data);
    }
    getData();
  }, [params]);
  return (
    <>
      {console.log('||poke', pokemon.pokemon)}
    </>
  );
}
