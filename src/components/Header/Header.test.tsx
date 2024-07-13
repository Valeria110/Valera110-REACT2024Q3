import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  it('should render a component with all the necessary elements', () => {
    const prevSearchTerm = 'Luke';
    const mockSetSearchTerm = vi.fn();
    const mockSetPageNum = vi.fn();
    render(
      <BrowserRouter>
        <Header prevSearchTerm={prevSearchTerm} setSearchTerm={mockSetSearchTerm} setPageNum={mockSetPageNum} />
      </BrowserRouter>,
    );

    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test button' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });
});
