// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store.ts';
// import { describe, expect, it, vi } from 'vitest';
// import { BrowserRouter } from 'react-router-dom';
// import ColorThemeProvider from '../../utils/colorThemeContext.tsx';
// import * as customHooks from '../../hooks/hooks.ts';
// import Flyout from './Flyout.tsx';

// const mockData = [
//   { url: '123', isSelected: true },
//   { url: '45t57b', isSelected: true },
// ];

// describe('Flyout component', () => {
//   it('should render the component correctly', async () => {
//     const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
//     mockedAppSelector.mockReturnValueOnce(mockData);

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ColorThemeProvider>
//             <Flyout />
//           </ColorThemeProvider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     expect(screen.getByText(/download/i)).toBeInTheDocument();
//     expect(screen.getByText(/unselect all/i)).toBeInTheDocument();
//   });
//   it('should not render the component when no selected people', async () => {
//     const mockedAppSelector = vi.spyOn(customHooks, 'useAppSelector');
//     mockedAppSelector.mockReturnValueOnce([]);

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ColorThemeProvider>
//             <Flyout />
//           </ColorThemeProvider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     expect(screen.queryByRole('button', { name: /download/i })).not.toBeInTheDocument();
//     expect(screen.queryByRole('button', { name: /unselect all/i })).not.toBeInTheDocument();
//   });
// });
