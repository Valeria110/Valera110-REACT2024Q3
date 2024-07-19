import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store.ts';

describe('Header component', () => {
  it('should render a component with all the necessary elements', () => {
    const prevSearchTerm = 'Luke';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header prevSearchTerm={prevSearchTerm} />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test button' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });
});
