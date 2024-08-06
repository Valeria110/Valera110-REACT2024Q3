// import { describe, expect, it, vi } from 'vitest';
// import Form from './Form.tsx';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store.ts';
// import searchTermSliceReducer, { setNewSearchTerm } from '../../features/searchTerm/searchTermSlice.ts';

// describe('Form component', () => {
//   it('should render Form component with proper data', () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Form prevSearchTerm="Lu"></Form>
//         </BrowserRouter>
//       </Provider>,
//     );

//     expect(screen.getByRole('searchbox')).toBeInTheDocument();
//     expect(screen.getByRole('searchbox')).toHaveValue('Lu');
//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });

//   it('should save a new search term to the Redux store on submit', async () => {
//     const searchTerm = '';
//     const mockUseLocalStorage = vi.spyOn(useLocalStorage, 'useLocalStorage');
//     mockUseLocalStorage.mockImplementation(vi.fn());

//     const user = userEvent.setup();
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Form prevSearchTerm={searchTerm} />
//         </BrowserRouter>
//       </Provider>,
//     );

//     const state = searchTermSliceReducer('', setNewSearchTerm('Test'));

//     await user.type(screen.getByRole('searchbox'), 'Test');
//     await user.click(screen.getByRole('button', { name: 'submit' }));

//     expect(state).toBe('Test');
//   });
// });
