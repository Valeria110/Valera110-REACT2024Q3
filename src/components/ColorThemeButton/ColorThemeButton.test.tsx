import { render, screen } from '@testing-library/react';
import ColorThemeButton from './ColorThemeButton';
import { ColorThemeContext } from '../../utils/colorThemeContext';
import { expect, vi, describe, it } from 'vitest';
import StoreProvider from '../../app/StoreProvider';

vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon({ icon }: { icon: { iconName: string } }) {
    return <span data-testid={`icon-${icon.iconName}`}></span>;
  },
}));

describe('ColorThemeButton', () => {
  it('should render a button with a sun icon when a dark mode is on', () => {
    render(
      <StoreProvider>
        <ColorThemeContext.Provider value={'dark'}>
          <ColorThemeButton />
        </ColorThemeContext.Provider>
      </StoreProvider>,
    );

    expect(screen.getByTestId('icon-sun')).toBeInTheDocument();
  });
});
