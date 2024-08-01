import { render, screen } from '@testing-library/react';
import LoadingPage from '../app/loading';
import { describe, expect, it } from 'vitest';

describe('LoadingPage', () => {
  it('should render the loader', () => {
    render(<LoadingPage />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
