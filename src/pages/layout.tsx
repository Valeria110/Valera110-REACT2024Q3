import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ColorThemeProvider from '../utils/colorThemeContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ColorThemeProvider>
        <div id="root" data-testid="root">
          {children}
        </div>
      </ColorThemeProvider>
    </Provider>
  );
}
