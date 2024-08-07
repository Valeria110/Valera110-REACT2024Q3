import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DetailsBlock from './DetailsBlock.tsx';
import { ResType } from '../../types/types.ts';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';

const mockCharData: ResType = {
  name: 'Luke Skywalker',
  height: '180',
  mass: '70',
  hair_color: 'black',
  skin_color: 'white',
  eye_color: 'blue',
  birth_year: '2000',
  gender: 'male',
  url: 'https/ddkfjnvkd;alslmvpeople/1',
};

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('DetailsBlock component', () => {
  it('should display a DetailsBlock with proper data', async () => {
    render(
      <Provider store={store}>
        <DetailsBlock data={mockCharData} />
      </Provider>,
    );

    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
    expect(screen.getByText(mockCharData.height)).toBeInTheDocument();
  });

  it('should be removed when clicking on a close button', async () => {
    render(
      <Provider store={store}>
        <DetailsBlock data={mockCharData} />
      </Provider>,
    );

    waitFor(() => {
      userEvent.click(screen.getByRole('button'));
      waitForElementToBeRemoved(() => screen.getByTestId('details-block'));
    });
  });
});
