import { createContext, ReactNode, useState } from 'react';

export const ColorThemeContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | string>(
  'light',
);

function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState('light');

  return <ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>{children}</ColorThemeContext.Provider>;
}

export default ColorThemeProvider;
