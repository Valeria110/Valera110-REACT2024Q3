import { Component, ReactNode } from 'react';
import './Header.scss';
import SWLogo from '../../assets/star-wars-logo.png';
import { ErrorBoundary } from '../../utils/utils.tsx';
import ErrorButton from '../ErrorButton/ErrorButton.tsx';
import Form from '../Form/Form.tsx';

interface IHeaderProps {
  prevSearchTerm: string;
}

class Header extends Component<IHeaderProps> {
  render(): ReactNode {
    return (
      <>
        <header className="header">
          <img src={SWLogo} alt="star wars logo" className="header__swapi-logo" />
          <ErrorBoundary>
            <ErrorButton className="header__test-btn">Test button</ErrorButton>
          </ErrorBoundary>
          <Form></Form>
        </header>
      </>
    );
  }
}

export default Header;
