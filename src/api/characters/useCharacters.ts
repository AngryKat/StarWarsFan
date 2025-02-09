import useSWRInfinite from 'swr/infinite';
import { fetcher } from '@/api/fetcher';
import { type CharacterApiData } from '@/utils/types';

export function useCharacters() {
  const getKey = (pageIndex: number, previousPageData: CharacterApiData) => {
    if (pageIndex === 0) {
      return 'https://swapi.py4e.com/api/people?page=1';
    }
    return previousPageData.next;
  };
  const { data, error, size, setSize } = useSWRInfinite<CharacterApiData>(getKey, fetcher, {
    suspense: true,
  });

  // transform data so only characters data is used
  const characters = data?.flatMap(({ results }) => results);

  return {
    characters,
    isError: error,
    loadMore: () => setSize(size + 1),
  };
}
