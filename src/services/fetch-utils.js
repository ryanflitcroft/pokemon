import { client, 
  checkError } from './client';

export async function getPokemon(start, end) {
  const response = await client
    .from('pokemon')
    .select()
    .range(start, end);
  // console.log('||response', response.data);

  return checkError(response);
}