import '../styles/global.scss';
import { ReactNode } from 'react';
import ColorThemeProvider from '../utils/colorThemeContext';
import StoreProvider from './StoreProvider';
import Header from '../components/Header/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <ColorThemeProvider>
        <html lang="en">
          <body>
            <div id="root" data-testid="root">
              <Header></Header>
              {children}
            </div>
          </body>
        </html>
      </ColorThemeProvider>
    </StoreProvider>
  );
}
