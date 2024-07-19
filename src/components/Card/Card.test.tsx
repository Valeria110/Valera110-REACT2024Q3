import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card.tsx';
import { ResType } from '../../types/types.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import DetailsBlock from '../DetailsBlock/DetailsBlock.tsx';
import { Provider } from 'react-redux';
import { store } from '../../app/store.ts';

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
        <BrowserRouter>
          <Card char={mockData} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
  });

  it('when clicking on a card, the Loader component should show up', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card char={mockData} />} />
            <Route path="/details/:charId" element={<DetailsBlock />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );

    const viewDetailsLink = screen.getByText('View details');
    await userEvent.click(viewDetailsLink);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
