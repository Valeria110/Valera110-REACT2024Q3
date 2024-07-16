import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setNewSearchTerm(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { setNewSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
