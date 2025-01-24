import axios from 'axios';
const baseUrl = 'https://swapi.py4e.com/api';

// Passing configuration object to axios
export async function fetchCharacters(page = 1, controller?: AbortController) {
  const url = `${baseUrl}/people?page=${page.toString()}`;
  console.log({ url });

  const res = await fetch(url, {
    signal: controller?.signal,
  });
  if (!res.ok) {
    throw new Error('Error while fetching characters');
  }
  return res.json();
}
export async function fetchCharacter(url: string, controller: AbortController) {
  console.log({ url });

  const res = await fetch(url, {
    signal: controller?.signal,
  });
  if (!res.ok) {
    throw new Error('Error while fetching fetchCharacter');
  }
  return res.json();
}
