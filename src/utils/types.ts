import { store } from '@/store';

export type RootStackParamList = {
  Details: { characterUrl: string };
  Home: undefined;
};

export type CharacterApiData = { results: Character[]; next: string | null };

export type ApiGender = 'Male' | 'Female' | 'unknown' | 'n/a' | 'none';
export type VagueGender = Exclude<ApiGender, 'Male' | 'Female'>;
export const isVagueGender = (x: ApiGender): x is VagueGender => {
  return x !== 'Female' && x !== 'Male';
};

type EyeColor = string | 'unknown' | 'n/a';

export type Character = {
  name: string;
  birth_year: string;
  eye_color: EyeColor;
  gender: ApiGender;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

export type Gender = 'female' | 'male' | 'other';

export type FansState = {
  female: { count: number; characterUrls: Record<string, string> };
  male: { count: number; characterUrls: Record<string, string> };
  other: { count: number; characterUrls: Record<string, string> };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
