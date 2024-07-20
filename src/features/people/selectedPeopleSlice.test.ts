import { describe, expect, it } from 'vitest';
import selectedPeopleSliceReducer, {
  addSelectedChar,
  removeSelectedChar,
  unselectAllPeople,
} from './selectedPeopleSlice.ts';

describe('selectedPeopleSlice', () => {
  it('should return the correct initial state', () => {
    const state = selectedPeopleSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual([]);
  });

  it('should add a new char when selected', () => {
    const state = selectedPeopleSliceReducer([], addSelectedChar({ url: '123', isSelected: true }));
    expect(state.length).toBe(1);
  });

  it('should remove a char when unselected', () => {
    const state = selectedPeopleSliceReducer(
      [
        { url: '123', isSelected: true },
        { url: '45t57b', isSelected: true },
      ],
      removeSelectedChar({ url: '123', isSelected: true }),
    );
    expect(state.length).toBe(1);
  });

  it('should remove all chars', () => {
    const state = selectedPeopleSliceReducer(
      [
        { url: '123', isSelected: true },
        { url: '45t57b', isSelected: true },
      ],
      unselectAllPeople(),
    );
    expect(state.length).toBe(0);
  });
});
