import { Component, ReactNode } from 'react';
import './Button.scss';

type ButtonTypes = 'submit' | 'reset' | 'button';

interface IButtonProps {
  children?: ReactNode;
  onClick: () => void;
  onSubmit?: (e: Event) => void;
  className: string;
  type: ButtonTypes;
}

class Button extends Component<IButtonProps> {
  onClick: () => void;

  constructor(props: IButtonProps) {
    super(props);
    this.onClick = this.props.onClick.bind(this);
  }
  render(): ReactNode {
    const { className, type, onClick } = this.props;

    return (
      <button className={className} type={type} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
