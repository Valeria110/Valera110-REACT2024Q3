// import { render, screen } from '@testing-library/react';
// import Card from './Card.tsx';
// import { ResType } from '../../types/types.ts';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store.ts';
// import { describe, expect, it, vi } from 'vitest';
// import ColorThemeProvider from '../../utils/colorThemeContext.tsx';
// import { createRemixStub } from "@remix-run/testing";
// import { ReactNode } from 'react';
// import * as customHooks from '../../hooks/hooks.ts';
// import { MemoryRouter } from 'react-router-dom';
// // import * as reactRouterDom from 'react-router-dom'

// const mockData: ResType = {
//   name: 'Luke Skywalker',
//   height: '180',
//   mass: '70',
//   hair_color: 'black',
//   skin_color: 'white',
//   eye_color: 'blue',
//   birth_year: '2000',
//   gender: 'male',
//   url: 'https/ddkfjnvkd;alslmvpeople/1',
// };

// const mockSelectedPeople: ResType[] = [
//   {
//     name: 'Luke Skywalker',
//     height: '180',
//     mass: '70',
//     hair_color: 'black',
//     skin_color: 'white',
//     eye_color: 'blue',
//     birth_year: '2000',
//     gender: 'male',
//     url: 'https/ddkfjnvkd;alslmvpeople/1',
//   },
// ];

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

// vi.mock('react-router-dom', () => ({
//   useSearchParams() {
//     return [{
//       get: (query: string) => (query === 'search' ? 'Luke' : '1'),
//     }]
//   },
// }));

// // const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
// // mockedAppSelector.mockReturnValueOnce(mockSelectedPeople);

// // const mockedAppDispatch = vi.spyOn(customHooks, 'useAppDispatch');
// // mockedAppDispatch.mockImplementation(() => vi.fn());

// // vi.spyOn(reactRouterDom, 'useSearchParams').mockImplementation(() => )

// const RemixStubCard = createRemixStub([
//   {
//     path: '/',
//     Component: () => Card({ char: mockData }),
//   },
// ]);

// describe('Card component', () => {
//   it('should render the relevant card data', () => {
//     render(
//       <Provider store={store}>
//         <ColorThemeProvider>
//         <MemoryRouter>
//           <RemixStubCard />

//           </MemoryRouter>
//         </ColorThemeProvider>
//       </Provider>,
//     );
//     expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
//     expect(screen.getByText('2000')).toBeInTheDocument();

//     // render(
//     //   <MemoryRouter>
//     //     <Card char={mockData} />
//     //   </MemoryRouter>
//     // );

//     expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
//   });

//   // it('when clicking on a card, the Loader component should show up', async () => {
//   //   render(
//   //     <Provider store={store}>
//   //       <ColorThemeProvider>
//   //         <DetailsBlock charData={mockData} searchTerm="" page={1} />
//   //       </ColorThemeProvider>
//   //     </Provider>,
//   //   );

//   //   const viewDetailsLink = screen.getByText('View details');
//   //   await userEvent.click(viewDetailsLink);

//   //   expect(screen.getByTestId('loader')).toBeInTheDocument();
//   // });
// });
