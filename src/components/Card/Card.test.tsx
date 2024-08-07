import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card.tsx';
import { ResType } from '../../types/types.ts';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';

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
describe('Card component', () => {
  it('should render the relevant card data', () => {
    render(
      <Provider store={store}>
        <Card char={mockData} />
      </Provider>,
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
  });
});
