import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../pages/_app.tsx';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';
import { Router } from 'next/router';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    prefetch: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    events: {
      on: () => {},
      off: () => {},
    },
  }),
}));

describe('_app component', () => {
  it('should render a RootLayout with the Component inside', () => {
    render(
      <Provider store={store}>
        <App Component={() => <div>Test</div>} pageProps={{}} router={{} as Router} />
      </Provider>,
    );

    waitFor(() => {
      expect(screen.getByText('Test')).toBeInTheDocument();
      expect(screen.getByRole('layout')).toBeInTheDocument();
    });
  });
});
