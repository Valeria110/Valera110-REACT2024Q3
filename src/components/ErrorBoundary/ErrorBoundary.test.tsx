import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorBoundary from './ErrorBoundary.tsx';
import ErrorButton from '../ErrorButton/ErrorButton.tsx';
import userEvent from '@testing-library/user-event';

describe('ErrorBoundary component', () => {
  it('should render fallback UI when an error occurs', async () => {
    const user = userEvent.setup();
    render(
      <ErrorBoundary>
        <ErrorButton className="test-button">Test button</ErrorButton>
      </ErrorBoundary>,
    );

    await user.click(screen.getByText('Test button'));
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Try again' })).toHaveClass('error-block__try-again-btn');
    expect(screen.getByRole('heading')).toHaveTextContent('Something went wrong :(');
    expect(screen.getByRole('heading', { name: 'Something went wrong :(' })).toBeInTheDocument();
  });

  it('should hide the fallback UI when try again button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ErrorBoundary>
        <ErrorButton className="test-button">Test button</ErrorButton>
      </ErrorBoundary>,
    );

    await user.click(screen.getByText('Test button'));
    await user.click(screen.getByText('Try again'));

    expect(screen.getByText('Test button')).toBeInTheDocument();
  });
});
