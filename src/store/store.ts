import { configureStore } from '@reduxjs/toolkit';
import validationErrorsReducer from '../features/validationErrorsSlice';
import countriesSlice from '../features/countriesSlice';
import formSliceReducer from '../features/formSlice';

export const store = configureStore({
  reducer: {
    errors: validationErrorsReducer,
    countries: countriesSlice,
    form: formSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
