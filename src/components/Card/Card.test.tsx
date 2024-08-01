import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Card from './Card.tsx';
import { ResType } from '../../types/types.ts';
import StoreProvider from '../../app/StoreProvider.tsx';

const mockData: ResType = {
  name: 'Luke Skywalker',
  height: '180',
  mass: '70',
  hair_color: 'black',
  skin_color: 'white',
  eye_color: 'blue',
  birth_year: '2000',
  gender: 'male',
  url: 'https/ddkfjnvkd;alslmvpeople/1',
};

vi.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: (query: string) => (query === 'search' ? 'Luke' : '1'),
    };
  },
}));

describe('Card component', () => {
  it('should render the relevant card data', () => {
    render(
      <StoreProvider>
        <Card char={mockData} />
      </StoreProvider>,
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
  });
});
