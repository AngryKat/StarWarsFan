export const routeNames = {
  details: 'Details',
  home: 'Home',
} as const;

export type CharacterApiData = { results: Character[]; next: string | null };


export type RootStackParamList = {
  [routeNames.details]: { characterUrl: string };
  [routeNames.home]: undefined;
};

type ApiGender = 'Male' | 'Female' | 'unknown' | 'n/a' | 'none';
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

