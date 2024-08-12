import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../types/types';

interface IInitialState {
  isValid: boolean;
  formData: IFormData[];
}

const initialState: IInitialState = {
  isValid: true,
  formData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<IFormData>) {
      state.formData.push(action.payload);
    },
    resetFormData(state) {
      state.formData = initialState.formData;
    },
    setFormValidation(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
  },
});

export const { setFormData, resetFormData, setFormValidation } = formSlice.actions;
export default formSlice.reducer;
