import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ColorThemeProvider from '../../utils/colorThemeContext.tsx';
import * as customHooks from '../../hooks/hooks.ts';
import Flyout from './Flyout.tsx';
import { ResType } from '../../types/types.ts';
import StoreProvider from '../../app/StoreProvider.tsx';
import userEvent from '@testing-library/user-event';
import { makeStore } from '../../store/store.ts';

const mockData = [
  { url: '123', isSelected: true },
  { url: '45t57b', isSelected: true },
];

const mockPeopleData: ResType[] = [
  {
    name: 'Luke Skywalker',
    height: '180',
    mass: '70',
    hair_color: 'black',
    skin_color: 'white',
    eye_color: 'blue',
    birth_year: '2000',
    gender: 'male',
    url: 'https/ddkfjnvkd;alslmvpeople/1',
  },
];

describe('Flyout component', () => {
  it('should render the component correctly', async () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValueOnce(mockData);

    render(
      <StoreProvider>
        <ColorThemeProvider>
          <Flyout peopleData={mockPeopleData} />
        </ColorThemeProvider>
      </StoreProvider>,
    );

    expect(screen.getByText(/download/i)).toBeInTheDocument();
    expect(screen.getByText(/unselect all/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });
  it('should not render the component when no selected people', async () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValueOnce([]);

    render(
      <StoreProvider>
        <ColorThemeProvider>
          <Flyout peopleData={mockPeopleData} />
        </ColorThemeProvider>
      </StoreProvider>,
    );

    expect(screen.queryByRole('button', { name: /download/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /unselect all/i })).not.toBeInTheDocument();
  });

  it('should unselect all items and hide Flyout when "Unselect all" button is clicked', async () => {
    const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
    mockedAppSelector.mockReturnValueOnce(mockData);
    const store = makeStore();
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <ColorThemeProvider>
          <Flyout peopleData={mockPeopleData} />
        </ColorThemeProvider>
      </StoreProvider>,
    );

    await user.click(screen.getByRole('button', { name: /unselect all/i }));
    expect(store.getState().selectedPeople).toEqual([]);
    expect(screen.queryByText(/selected items/i)).not.toBeInTheDocument();
  });
});
