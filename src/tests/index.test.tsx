import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { expect, it, vi } from 'vitest';
import App from '../pages/index.tsx';
import { IResponse } from '../services/services';
import { ResType } from '../types/types.ts';

interface MockData1 {
  peopleData: IResponse;
  charData: ResType;
  query: string;
  page: number;
}

interface MockData2 {
  peopleData: IResponse;
  charData: null;
  query: string;
  page: number;
}

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

describe('App component', () => {
  it('should show details when charData is not null', () => {
    const mockData: MockData1 = {
      peopleData: {
        count: 10,
        results: [
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
        next: null,
        previous: null,
      },
      charData: {
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
      query: '',
      page: 1,
    };

    render(
      <Provider store={store}>
        <App data={mockData} />
      </Provider>,
    );
    const paginationInput = screen.getByRole('textbox');
    expect(paginationInput).toHaveValue('1');
    expect(screen.getByTestId('details-block')).toBeInTheDocument();
  });

  it('should not show details when charData is null', () => {
    const mockData: MockData2 = {
      peopleData: {
        count: 10,
        results: [
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
        next: null,
        previous: null,
      },
      charData: null,
      query: '',
      page: 1,
    };

    render(
      <Provider store={store}>
        <App data={mockData} />
      </Provider>,
    );

    expect(screen.queryByTestId('details-block')).not.toBeInTheDocument();
  });
});
