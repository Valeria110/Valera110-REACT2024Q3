import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination.tsx';
import userEvent from '@testing-library/user-event';
import StoreProvider from '../../app/StoreProvider.tsx';
import * as navigate from 'next/navigation';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: vi.fn(),
    };
  },
  useSearchParams() {
    return {
      get: (query: string) => (query === 'search' ? 'Luke' : '3'),
    };
  },
}));

describe('Pagination component', () => {
  const useRouterSpy = vi.spyOn(navigate, 'useRouter').mockImplementation(() => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }));

  it('should render pagination with proper data and change page saving new page num to the Redux store', async () => {
    render(
      <StoreProvider>
        <Pagination pagesCount={8} />
      </StoreProvider>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    await userEvent.click(screen.getByText('Next'));
    expect(useRouterSpy).toBeCalled();
    await userEvent.click(screen.getByText('Prev'));
    expect(useRouterSpy).toBeCalled();
  });

  it('should change the input value when typing and save it to the Redux store', async () => {
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <Pagination pagesCount={8} />
      </StoreProvider>,
    );

    const paginationInput = screen.getByRole('textbox');
    await user.type(paginationInput, '3');
    expect(paginationInput).toHaveValue('33');
    await user.keyboard('Enter');
    expect(useRouterSpy).toBeCalled();
  });
});
