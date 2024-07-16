import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  pagesCount: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeToPrevPage(state) {
      state.page -= 1;
    },
    changeToNextPage(state) {
      state.page += 1;
    },
    setPagesCount(state, action: PayloadAction<number>) {
      state.pagesCount = action.payload;
    },
  },
});

export const { setCurPage, changeToPrevPage, changeToNextPage, setPagesCount } = paginationSlice.actions;
export default paginationSlice.reducer;
