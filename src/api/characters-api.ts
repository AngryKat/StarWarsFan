import axios from 'axios';
const baseUrl = 'https://swapi.py4e.com/api';

// Passing configuration object to axios
export async function fetchCharacters(page = 1) {
  console.log('fetch');

  const params = new URLSearchParams();
  params.append('page', '' + page);
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/people`,
    params,
  };
  try {

    const response = await axios(configurationObject);
    return response.data;
  } catch (e) {
    console.error('Could not fetch', e);
  }
};
export async function fetchCharacterById(id: string) {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/people/${id}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};
