import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorPage from '../../pages/404.tsx';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';

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
      <Provider store={store}>
        <ErrorPage />
      </Provider>,
    );
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });
});
