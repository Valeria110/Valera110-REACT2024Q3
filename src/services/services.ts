import { ResType } from '../types/types.ts';

const BASE_URL = 'https://swapi.dev/api/';

export const searchPeopleByName = async (query: string | React.Dispatch<React.SetStateAction<string>> = '') => {
  try {
    const res = await fetch(`${BASE_URL}/people/?search=${query}`);
    const data = await res.json();
    if ('results' in data && data.results.length) {
      const people: ResType[] = data.results;
      return people;
    }
  } catch (err) {
    console.error(`Error is: ${err}`);
  }
};
