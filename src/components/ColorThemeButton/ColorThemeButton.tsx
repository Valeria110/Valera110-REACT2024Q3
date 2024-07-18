import './ColorThemeButton.scss';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useContext } from 'react';

function ColorThemeButton() {
  const [colorTheme, setColorTheme] = useContext(ColorThemeContext);

  const changeColorTheme = () => {
    if (typeof setColorTheme === 'function') {
      colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');
    }
  };

  return (
    <button className={`ColorThemeButton ${colorTheme}`} onClick={changeColorTheme}>
      {colorTheme === 'light' ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
    </button>
  );
}

export default ColorThemeButton;
