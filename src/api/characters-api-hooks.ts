import useSWR from 'swr';
import { Character } from '../types';
import useSWRInfinite from 'swr/infinite';

async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    return Promise.reject('Failed to fetch' + response.status);
  }
  return response.json();
}

type Data = { results: Character[]; next: string | null };
export function useCharacters() {
  const getKey = (pageIndex: number, previousPageData: Data) => {
    if (pageIndex === 0) {
      return 'https://swapi.py4e.com/api/people?page=1';
    }
    return previousPageData.next;
  };
  const { data, error, size, setSize } = useSWRInfinite<Data>(
    getKey,
    fetcher,
    { suspense: true },
  );

  const characters = data?.flatMap(({ results }) => results);

  return {
    characters,
    isError: error,
    loadMore: () => setSize(size + 1),
  };
}
export function useCharacter(characterUrl: string) {
  const { data, error } = useSWR<Character>(characterUrl, fetcher, {
    suspense: true,
  });
  return {
    character: data,
    isError: error,
  };
}
