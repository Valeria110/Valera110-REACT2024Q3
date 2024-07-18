import { ReactNode, useContext, useState } from 'react';
import './ErrorButton.scss';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';

interface IErrorButtonProps {
  children?: ReactNode;
  className: string;
}

function ErrorButton({ children, className }: IErrorButtonProps): ReactNode | never {
  const [counter, setCounter] = useState<number>(0);
  const [colorTheme] = useContext(ColorThemeContext);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  if (counter === 1) {
    throw new Error('Test ErrorBoundary component');
  } else {
    return (
      <button className={`${className} ${colorTheme}`} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

export default ErrorButton;
