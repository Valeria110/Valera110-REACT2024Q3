import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorPage from './ErrorPage.tsx';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(() => ({
    push: vi.fn(),
    go: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  })),
  useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
  it('should render ErrorPage with proper data', () => {
    render(<ErrorPage />);
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });
});
