import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResType } from '../types/types.ts';

const BASE_URL = 'https://swapi.dev/api/';

export interface IResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: ResType[];
}
export interface IApiSliceResponse {
  people: IResponse['results'];
  count: IResponse['count'];
}
export interface getPeopleByPageArgs {
  page: number;
  query: string;
}

export const apiSlice = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPeopleByPage: builder.query<IApiSliceResponse, getPeopleByPageArgs>({
      query: ({ page = 1, query = '' }) => `/people/?page=${page}&search=${query}`,
      transformResponse: (response: IResponse) => ({ people: response.results, count: response.count }),
    }),
  }),
});

export const getPeople = async (query: string = '', page: number = 1) => {
  const res = await fetch(`${BASE_URL}/people/?search=${query}&page=${page}`);
  const data: IResponse = await res.json();
  return data;
};

export const getPeopleById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/people/${id}`);
  const data: ResType = await res.json();
  return data;
};

export const { useGetPeopleByPageQuery } = apiSlice;
