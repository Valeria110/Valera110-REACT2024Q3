import { Component, ReactNode } from 'react';
import { IErrorBoundaryState, IProps } from '../types/types.ts';

class ErrorBoundary extends Component<IProps, IErrorBoundaryState> {
  state: Readonly<IErrorBoundaryState>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(): void {
    console.error('Oops... React caught an error');
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export { ErrorBoundary };
