import { client, 
  checkError } from './client';

export async function getPokemon(start, end) {
  const response = await client
    .from('pokemon')
    .select()
    .range(start, end);

  return checkError(response);
}

export async function getPokemonDetail(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();
    
  return checkError(response);
}