import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorButton from './ErrorButton.tsx';
import userEvent from '@testing-library/user-event';

describe('ErrorButton component', () => {
  it('should render the button properly', () => {
    render(<ErrorButton className="test-button" children={'Test button'} />);
    expect(screen.getByText('Test button')).toBeInTheDocument();
    expect(screen.getByText('Test button')).toHaveClass('test-button');
    expect(screen.getByRole('button')).toHaveTextContent('Test button');
  });

  it('should throw an error when clicked', async () => {
    const user = userEvent.setup();
    render(<ErrorButton className="test-button" children={'Test button'} />);
    waitFor(() => {
      expect(user.click(screen.getByText('Test button'))).toThrowError('Test ErrorBoundary component');
    });
  });
});
