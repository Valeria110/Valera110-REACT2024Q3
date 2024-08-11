import { createSlice } from '@reduxjs/toolkit';
import { countriesList } from '../utils/countriesList';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: countriesList,
  reducers: {},
});

export default countriesSlice.reducer;
