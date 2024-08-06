// import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
// import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import { describe, expect, it } from 'vitest';
// import DetailsBlock from './DetailsBlock.tsx';
// import { createContext } from 'react';
// import { ResType } from '../../types/types.ts';
// import userEvent from '@testing-library/user-event';

// const mockPeopleData: ResType[] | null = [
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
// const OutletContext = createContext<ResType[] | null>(null);

// describe('DetailsBlock component', () => {
//   // it('should display a loader while fetching data', () => {
//   //   render(
//   //     <MemoryRouter>
//   //       <DetailsBlock />
//   //     </MemoryRouter>,
//   //   );
//   //   expect(screen.getByTestId('loader')).toBeInTheDocument();
//   // });

//   it('should display a DetailsBlock with proper data', async () => {
//     render(
//       <BrowserRouter>
//         <OutletContext.Provider value={mockPeopleData}>
//           <DetailsBlock charData={mockPeopleData[0]} page={1} searchTerm='' />
//         </OutletContext.Provider>
//       </BrowserRouter>,
//     );

//     waitFor(() => {
//       expect(screen.getByText(`Height: ${mockPeopleData[0].height}`)).toBeInTheDocument();
//       expect(screen.getByText(`Mass: ${mockPeopleData[0].mass}`)).toBeInTheDocument();
//       expect(screen.getByText(`Hair color: ${mockPeopleData[0].mass}`)).toBeInTheDocument();
//       expect(screen.getByText(`Skin color: ${mockPeopleData[0].mass}`)).toBeInTheDocument();
//       expect(screen.getByText(`Eye color: ${mockPeopleData[0].mass}`)).toBeInTheDocument();
//       expect(screen.getByText(`Gender: ${mockPeopleData[0].mass}`)).toBeInTheDocument();
//     });
//   });

//   // it('loader should be removed from the DOM when data is fetched', async () => {
//   //   render(
//   //     <BrowserRouter>
//   //       <OutletContext.Provider value={mockPeopleData}>
//   //         <DetailsBlock></DetailsBlock>
//   //       </OutletContext.Provider>
//   //     </BrowserRouter>,
//   //   );

//   //   waitForElementToBeRemoved(() => screen.getByTestId('loader'));
//   // });

//   it('should be removed when clicking on a close button', async () => {
//     render(
//       <BrowserRouter>
//         <OutletContext.Provider value={mockPeopleData}>
//         <DetailsBlock charData={mockPeopleData[0]} page={1} searchTerm='' />
//         </OutletContext.Provider>
//       </BrowserRouter>,
//     );

//     waitFor(() => {
//       userEvent.click(screen.getByRole('button'));
//       waitForElementToBeRemoved(() => screen.getByTestId('details-block'));
//     });
//   });
// });
