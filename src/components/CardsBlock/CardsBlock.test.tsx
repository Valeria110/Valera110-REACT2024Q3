// import { describe, expect, it, vi } from 'vitest';
// import { ResType } from '../../types/types.ts';
// import CardsBlock from './CardsBlock.tsx';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store.ts';
// import * as customHooks from '../../hooks/hooks.ts';
// import { ReactNode } from 'react';

// const mockData: { people: ResType[]; pageNum: number } = {
//   people: [
//     {
//       name: 'Luke Skywalker',
//       height: '180',
//       mass: '70',
//       hair_color: 'black',
//       skin_color: 'white',
//       eye_color: 'blue',
//       birth_year: '2000',
//       gender: 'male',
//       url: 'https/ddkfjnvkd;alslmvpeople/1',
//     },
//   ],
//   pageNum: 1,
// };

// vi.mock('../../utils/colorThemeContext.tsx', () => ({
//   ColorThemeContext() {
//     return {
//       Provider: ({ children }: { children: ReactNode }) => children,
//     };
//   },
// }));

// interface ListItemProps {
//   label: string;
//   value: string;
//   className: string;
// }
// vi.mock('../ListItem/ListItem.tsx', () => ({
//   ListItem({ label, value, className = 'list-item' }: ListItemProps) {
//     return (
//       <li className={className}>
//         <b>{label}</b>
//         {value ? value : 'unknown'}
//       </li>
//     );
//   },
// }));

// describe('CardsBlock component', () => {
//   it('should display an appropriate message if no cards are present', () => {
//     render(
//       <Provider store={store}>
//         <CardsBlock people={[]} />
//       </Provider>,
//     );
//     expect(screen.getByText('No people found')).toBeInTheDocument();
//   });

//   it('should render the specified number of cards', () => {
//     const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
//     mockedAppSelector.mockReturnValue(mockData.people);

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//         <CardsBlock people={mockData.people} />

//         </MemoryRouter>
//       </Provider>,
//     );
//     const cards = screen.getAllByTestId('card');
//     expect(cards).toHaveLength(mockData.people.length);
//   });
//   // it('should display a loader when fetching the data', () => {
//   //   render(
//   //     <Provider store={store}>
//   //       <MemoryRouter>
//   //         <CardsBlock />
//   //       </MemoryRouter>
//   //     </Provider>,
//   //   );
//   //   expect(screen.getByTestId('loader')).toBeInTheDocument();
//   // });
// });
