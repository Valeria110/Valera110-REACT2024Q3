import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISelectedPerson {
  url: string;
  isSelected: boolean;
}

const initialState: ISelectedPerson[] = [];

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    addSelectedChar(state, action: PayloadAction<ISelectedPerson>) {
      if (!state.find((char) => char.url === action.payload.url)) {
        state.push(action.payload);
      } else {
        return state;
      }
    },
    removeSelectedChar(state, action: PayloadAction<ISelectedPerson>) {
      return state.filter((char) => char.url !== action.payload.url);
    },
    unselectAllPeople(state) {
      state = [];
      return state;
    },
  },
});

export const { addSelectedChar, removeSelectedChar, unselectAllPeople } = selectedPeopleSlice.actions;
export default selectedPeopleSlice.reducer;
