import { describe, expect, it, vi } from 'vitest';
import Form from './Form.tsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import searchTermSliceReducer, { setNewSearchTerm } from '../../features/searchTerm/searchTermSlice.ts';
import * as customHooks from '../../hooks/hooks.ts';
import { ResType } from '../../types/types.ts';

const mockPeopleData: ResType[] = [
  {
    name: 'Luke Skywalker',
    height: '180',
    mass: '70',
    hair_color: 'black',
    skin_color: 'white',
    eye_color: 'blue',
    birth_year: '2000',
    gender: 'male',
    url: 'https/ddkfjnvkd;alslmvpeople/1',
  },
];

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

describe('Form component', () => {
  it('should render Form component with proper data', () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValue(mockPeopleData);

    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>,
    );

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('Lu');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should save a new search term to the Redux store on submit', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const state = searchTermSliceReducer('', setNewSearchTerm('Test'));

    await user.type(screen.getByRole('searchbox'), 'Test');
    await user.click(screen.getByRole('button', { name: 'submit' }));

    expect(state).toBe('Test');
  });
});
