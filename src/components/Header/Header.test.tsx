import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header.tsx';
import StoreProvider from '../../app/StoreProvider.tsx';

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
      <StoreProvider>
        <Header />
      </StoreProvider>,
    );

    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });
});
