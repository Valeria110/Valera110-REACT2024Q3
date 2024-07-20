import { ReactNode } from 'react';
import './Button.scss';

type ButtonTypes = 'submit' | 'reset' | 'button';

interface IButtonProps {
  children?: ReactNode;
  handleClick: () => void;
  onSubmit?: (e: Event) => void;
  className: string;
  type?: ButtonTypes;
  disabled: boolean;
}

function Button({ children, handleClick, className, type = 'button', disabled }: IButtonProps): ReactNode {
  return (
    <button className={className} type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
