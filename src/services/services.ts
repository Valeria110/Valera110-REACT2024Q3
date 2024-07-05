import { ResType } from '../types/types.ts';

const BASE_URL = 'https://swapi.dev/api/';
const prevSearchTerm = localStorage.getItem('prevSearchTerm') ?? '';

export type FetchPeopleReturnType = Awaited<ReturnType<typeof fetchPeople>>;

export const fetchPeople: () => Promise<ResType[] | void> = async () => {
  try {
    const res = await fetch(`${BASE_URL}/people/?search=${prevSearchTerm}`);
    const data = await res.json();
    if ('results' in data) {
      const people: ResType[] = data.results;
      return people;
    }
  } catch (err) {
    console.error(`Error is: ${err}`);
  }
};

export const searchPeopleByName = async (query: string) => {
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
