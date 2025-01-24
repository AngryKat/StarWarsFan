export type RootStackParamList = {
  Details: { characterUrl: string };
  Home: undefined;
};

export type Character = {
  name: string;
  birth_year: string;
  eye_color: string | 'unknown' | 'n/a';
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
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
