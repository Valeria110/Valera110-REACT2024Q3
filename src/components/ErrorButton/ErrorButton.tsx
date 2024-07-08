import { ReactNode, useState } from 'react';
import './ErrorButton.scss';

interface IErrorButtonProps {
  children?: ReactNode;
  className: string;
}

function ErrorButton({ children, className }: IErrorButtonProps): ReactNode | never {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  if (counter === 1) {
    throw new Error('Test ErrorBoundary component');
  } else {
    return (
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

export default ErrorButton;
