import { describe, expect, it, Mock, vi } from 'vitest';
import Form from './Form.tsx';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import userEvent from '@testing-library/user-event';

const mockSetPageNum = vi.fn();
const mockSetSearchTerm = vi.fn();

describe('Form component', () => {
  it('should render Form component with proper data', () => {
    render(
      <BrowserRouter>
        <Form setPageNum={mockSetPageNum} setSearchTerm={mockSetSearchTerm} prevSearchTerm="Lu"></Form>
      </BrowserRouter>,
    );

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('Lu');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should save a new search term on submit', async () => {
    const searchTerm = '';
    vi.mock('../../hooks/useLocalStorage.ts');
    const mockUseLocalStorage = useLocalStorage as Mock;
    mockUseLocalStorage.mockReturnValue([searchTerm, mockSetSearchTerm]);

    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Form setSearchTerm={mockSetSearchTerm} setPageNum={mockSetPageNum} prevSearchTerm={searchTerm} />
      </BrowserRouter>,
    );

    await user.type(screen.getByRole('searchbox'), 'Test');
    await user.click(screen.getByRole('button', { name: 'submit' }));

    await waitFor(() => {
      expect(mockSetSearchTerm).toHaveBeenCalledWith('Test');
    });
  });
});
