import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App.tsx';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { router } from './routes/routes.tsx';

vi.mock('./services/services.ts', () => ({
  searchPeopleByName: vi.fn(() => Promise.resolve({ people: [{ name: 'Luke Skywalker' }], peopleCount: 1 })),
}));

describe('App component', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should update people state and pagesCount after successful search', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    await user.type(screen.getByRole('searchbox'), 'Luke');

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
  });

  it('should render the App component', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
  });
});
