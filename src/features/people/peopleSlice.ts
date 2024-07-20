import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResType } from '../../types/types.ts';

const initialState: ResType[] = [];

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    updatePeople(_, action: PayloadAction<ResType[]>) {
      return action.payload;
    },
  },
});

export const { updatePeople } = peopleSlice.actions;
export default peopleSlice.reducer;
