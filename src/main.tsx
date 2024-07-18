import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import ColorThemeProvider from './utils/colorThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ColorThemeProvider>
    </Provider>
  </React.StrictMode>,
);
