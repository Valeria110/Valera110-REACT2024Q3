import { describe, expect, it } from 'vitest';
import { ResType } from '../../types/types.ts';
import CardsBlock from './CardsBlock.tsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const mockData: { people: ResType[]; pageNum: number } = {
  people: [],
  pageNum: 1,
};
const mockData2: { people: ResType[]; pageNum: number } = {
  people: [
    {
      name: 'Luke Skywalker',
      height: '180',
      mass: '70',
      hairColor: 'black',
      skinColor: 'white',
      eyeColor: 'blue',
      birthYear: '2000',
      gender: 'male',
      url: 'https/ddkfjnvkd;alslmvpeople/1',
    },
  ],
  pageNum: 1,
};

describe('CardsBlock component', () => {
  it('should display an appropriate message if no cards are present', () => {
    render(<CardsBlock people={mockData.people} pageNum={mockData.pageNum} />);
    expect(screen.getByText('No people found')).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    render(
      <MemoryRouter>
        <CardsBlock people={mockData2.people} pageNum={mockData2.pageNum} />
      </MemoryRouter>,
    );
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(mockData2.people.length);
  });
  it('should display a loader when fetching the data', () => {
    render(
      <MemoryRouter>
        <CardsBlock people={null} pageNum={mockData2.pageNum} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
