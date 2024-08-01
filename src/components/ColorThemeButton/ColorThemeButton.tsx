'use client';

import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ColorThemeButton() {
  const [colorTheme, setColorTheme] = useContext(ColorThemeContext);

  const changeColorTheme = () => {
    if (typeof setColorTheme === 'function') {
      colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');
    }
  };

  return (
    <button className={`ColorThemeButton ${colorTheme}`} onClick={changeColorTheme}>
      {colorTheme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
}

export default ColorThemeButton;
