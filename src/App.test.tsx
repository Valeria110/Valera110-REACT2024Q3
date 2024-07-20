import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App.tsx';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import ColorThemeProvider from './utils/colorThemeContext.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import * as customHooks from './hooks/hooks.ts';

const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
const mockedAppDispatch = vi.spyOn(customHooks, 'useAppDispatch');

describe('App component', () => {
  it('should render correctly', () => {
    mockedAppSelector.mockReturnValue([]);
    mockedAppDispatch.mockReturnValue(vi.fn());

    vi.mock('./services/services.ts', () => {
      return {
        useGetPeopleByPageQuery: vi.fn().mockResolvedValue({
          data: { people: [], count: 0 },
        }),
        apiSlice: {
          reducerPath: 'api',
          reducer: (state = {}) => state,
          middleware: [],
        },
      };
    });

    render(
      <Provider store={store}>
        <ColorThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ColorThemeProvider>
      </Provider>,
    );
    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByText(/no people found/i)).toBeInTheDocument();
  });

  it('should render the App component', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    expect(screen.getByPlaceholderText('Search by name...')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByAltText('star wars logo')).toBeInTheDocument();
  });
});
