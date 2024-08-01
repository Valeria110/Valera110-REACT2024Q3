import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/services.ts';
import peopleReducer from '../features/people/peopleSlice.ts';
import selectedPeopleReducer from '../features/people/selectedPeopleSlice.ts';
import paginationReducer from '../features/pagination/paginationSlice.ts';
import setNewSearchTermReducer from '../features/searchTerm/searchTermSlice.ts';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      people: peopleReducer,
      selectedPeople: selectedPeopleReducer,
      pagination: paginationReducer,
      searchTerm: setNewSearchTermReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
