import { ReactNode } from 'react';
import './Button.scss';

type ButtonTypes = 'submit' | 'reset' | 'button';

interface IButtonProps {
  children?: ReactNode;
  onClick: () => void;
  onSubmit?: (e: Event) => void;
  className: string;
  type: ButtonTypes;
}

function Button({ children, onClick, className, type }: IButtonProps): ReactNode {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
