import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination.tsx';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Pagination component', () => {
  it('should render pagination with proper data', async () => {
    const setPageNum = vi.fn();
    render(
      <BrowserRouter>
        <Pagination pagesCount={8} pageNum={3} setPageNum={setPageNum} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    await userEvent.click(screen.getByText('Prev'));
    expect(setPageNum).toHaveBeenCalled();
    await userEvent.click(screen.getByText('Next'));
    expect(setPageNum).toHaveBeenCalled();
  });

  it('should update URL with query string after clicking the button', () => {
    render(
      <BrowserRouter>
        <Pagination pagesCount={8} pageNum={3} setPageNum={vi.fn()} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('textbox')).toHaveValue('3');
  });
});
