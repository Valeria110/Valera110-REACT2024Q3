import { describe, expect, it, vi } from 'vitest';
import { ResType } from '../../types/types.ts';
import CardsBlock from './CardsBlock.tsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store.ts';
import * as customHooks from '../../hooks/hooks.ts';

const mockData: { people: ResType[]; pageNum: number } = {
  people: [
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
  ],
  pageNum: 1,
};

describe('CardsBlock component', () => {
  it('should display an appropriate message if no cards are present', () => {
    render(
      <Provider store={store}>
        <CardsBlock isFetching={false} />
      </Provider>,
    );
    expect(screen.getByText('No people found')).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValue(mockData.people);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsBlock isFetching={false} />
        </MemoryRouter>
      </Provider>,
    );
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(mockData.people.length);
  });
  it('should display a loader when fetching the data', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsBlock isFetching={true} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
