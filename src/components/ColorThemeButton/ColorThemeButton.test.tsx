import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import ColorThemeButton from './ColorThemeButton';
import { ColorThemeContext } from '../../utils/colorThemeContext';
import { expect, vi, describe, it } from 'vitest';

vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon({ icon }: { icon: { iconName: string } }) {
    return <span data-testid={`icon-${icon.iconName}`}></span>;
  },
}));

describe('ColorThemeButton', () => {
  it('should render a button with a sun icon when a dark mode is on', () => {
    render(
      <Provider store={store}>
        <ColorThemeContext.Provider value={'dark'}>
          <ColorThemeButton />
        </ColorThemeContext.Provider>
      </Provider>,
    );

    expect(screen.getByTestId('icon-sun')).toBeInTheDocument();
  });
});
