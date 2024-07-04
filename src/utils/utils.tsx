import { Component, ReactNode } from 'react';
import { IErrorBoundaryState, IProps } from '../types/types.ts';

class ErrorBoundary extends Component<IProps, IErrorBoundaryState> {
  state: Readonly<IErrorBoundaryState>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.closeError = this.closeError.bind(this);
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(): void {
    console.error('Oops... React caught an error');
  }

  closeError() {
    this.setState({ hasError: false });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-block">
          <h1 className="error-block__header">Something went wrong :(</h1>
          <button className="error-block__try-again-btn" onClick={this.closeError}>
            Try again
          </button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export { ErrorBoundary };
