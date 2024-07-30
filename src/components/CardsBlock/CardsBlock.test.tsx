import { describe, expect, it, vi } from 'vitest';
import { ResType } from '../../types/types.ts';
import CardsBlock from './CardsBlock.tsx';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
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
        <CardsBlock />
      </Provider>,
    );
    expect(screen.getByText('No people found')).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValue(mockData.people);

    render(
      <Provider store={store}>
        <CardsBlock />
      </Provider>,
    );
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(mockData.people.length);
  });
});
