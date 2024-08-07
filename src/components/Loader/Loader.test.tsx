import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { expect, describe, it } from 'vitest';
import Loader from './Loader';

describe('ColorThemeButton', () => {
  it('should render a button with a sun icon when a dark mode is on', () => {
    render(
      <Provider store={store}>
        <Loader />
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
