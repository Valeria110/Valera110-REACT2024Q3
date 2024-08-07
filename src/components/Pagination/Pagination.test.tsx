import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination.tsx';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import paginationSliceReducer, {
  setCurPage,
  changeToPrevPage,
  changeToNextPage,
} from '../../features/pagination/paginationSlice.ts';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: vi.fn(),
    };
  },
  useSearchParams() {
    return {
      get: () => 'Lu',
    };
  },
}));

describe('Pagination component', () => {
  it('should render pagination with proper data and change page saving new page num to the Redux store', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    await userEvent.click(screen.getByText('Prev'));
    const state1 = paginationSliceReducer({ page: 3, pagesCount: 8 }, changeToPrevPage());
    expect(state1.page).toBe(2);
    await userEvent.click(screen.getByText('Next'));
    const state2 = paginationSliceReducer({ page: 3, pagesCount: 8 }, changeToNextPage());
    expect(state2.page).toBe(4);
  });

  it('should change the input value when typing and save it to the Redux store', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    );

    const paginationInput = screen.getByRole('textbox');
    await user.type(paginationInput, '3');
    expect(paginationInput).toHaveValue('13');
    await user.keyboard('Enter');
    const state = paginationSliceReducer({ page: 1, pagesCount: 8 }, setCurPage(3));
    expect(state.page).toBe(3);
  });
});
