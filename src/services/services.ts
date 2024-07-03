import { ResType } from '../types/types.ts';

const BASE_URL = 'https://swapi.dev/api/';

export type FetchPeopleReturnType = Awaited<ReturnType<typeof fetchPeople>>;

export const fetchPeople: () => Promise<ResType[] | void> = async () => {
  try {
    const res = await fetch(`${BASE_URL}/people/`);
    const data = await res.json();
    if ('results' in data) {
      const people: ResType[] = data.results;
      return people;
    }
  } catch (err) {
    console.error(`Error is: ${err}`);
  }
};
