import useSWR from 'swr';
import { Character } from '@/utils/types';
import { fetcher } from '@/api/fetcher';

export function useCharacter(characterUrl: string) {
  const { data, error } = useSWR<Character>(characterUrl, fetcher, {
    suspense: true,
  });
  return {
    character: data,
    isError: error,
  };
}
