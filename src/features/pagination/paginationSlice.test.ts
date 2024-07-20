import { describe, expect, it } from 'vitest';
import paginationSliceReducer, {
  initialState,
  setCurPage,
  changeToPrevPage,
  changeToNextPage,
  setPagesCount,
} from './paginationSlice.ts';

describe('paginationSlice', () => {
  it('should return the correct initial state', () => {
    const state = paginationSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should go to the previous page', () => {
    const state = paginationSliceReducer({ page: 2, pagesCount: 1 }, changeToPrevPage());
    expect(state.page).toBe(1);
  });

  it('should go to the next page', () => {
    const state = paginationSliceReducer(initialState, changeToNextPage());
    expect(state.page).toBe(2);
  });

  it('should set the current page to the specified number', () => {
    const state = paginationSliceReducer(initialState, setCurPage(3));
    expect(state.page).toBe(3);
  });
  it('should set pages count to the specified number', () => {
    const state = paginationSliceReducer(initialState, setPagesCount(5));
    expect(state.pagesCount).toBe(5);
  });
});
