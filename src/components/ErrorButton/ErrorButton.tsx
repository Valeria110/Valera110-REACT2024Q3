import { Component, ReactNode } from 'react';
import './ErrorButton.scss';

interface IErrorButtonProps {
  children?: ReactNode;
  className: string;
}

interface IErrorButtonState {
  counter: number;
}

class ErrorButton extends Component<IErrorButtonProps, IErrorButtonState> {
  constructor(props: IErrorButtonProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      counter: 0,
    };
  }

  onClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render(): ReactNode {
    const { counter } = this.state;
    if (counter === 1) {
      throw new Error('Test ErrorBoundary component');
    }
    return (
      <button className={this.props.className} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default ErrorButton;
