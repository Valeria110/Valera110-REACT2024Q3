import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header.tsx';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';

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

describe('Header component', () => {
  it('should render a component with all the necessary elements', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });
});
