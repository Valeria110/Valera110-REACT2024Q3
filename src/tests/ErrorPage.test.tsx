import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorPage from '../app/not-found.tsx';
import StoreProvider from '../app/StoreProvider.tsx';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: vi.fn(),
    };
  },
}));

describe('ErrorPage', () => {
  it('should render ErrorPage with proper data', () => {
    render(
      <StoreProvider>
        <ErrorPage />
      </StoreProvider>,
    );
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });
});
