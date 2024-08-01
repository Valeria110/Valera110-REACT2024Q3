import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Loader from './Loader';
import StoreProvider from '../../app/StoreProvider';

describe('ColorThemeButton', () => {
  it('should render a button with a sun icon when a dark mode is on', () => {
    render(
      <StoreProvider>
        <Loader />
      </StoreProvider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
