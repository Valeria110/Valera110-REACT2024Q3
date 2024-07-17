import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/services.ts';
import peopleReducer from '../features/people/peopleSlice.ts';
import selectedPeopleReducer from '../features/people/selectedPeopleSlice.ts';
import paginationReducer from '../features/pagination/paginationSlice.ts';
import setNewSearchTermReducer from '../features/searchTerm/searchTermSlice.ts';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    people: peopleReducer,
    selectedPeople: selectedPeopleReducer,
    pagination: paginationReducer,
    searchTerm: setNewSearchTermReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
