import useSWR from 'swr';
import { Character } from '../../types';
import { fetcher } from '../fetcher';

export function useCharacter(characterUrl: string) {
  const { data, error } = useSWR<Character>(characterUrl, fetcher, {
    suspense: true,
  });
  return {
    character: data,
    isError: error,
  };
}
