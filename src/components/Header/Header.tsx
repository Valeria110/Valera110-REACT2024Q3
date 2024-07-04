import { Component, ReactNode } from 'react';
import './Header.scss';
import SWLogo from '../../assets/star-wars-logo.png';
import ErrorButton from '../ErrorButton/ErrorButton.tsx';
import Form from '../Form/Form.tsx';
import { ResType } from '../../types/types.ts';

interface HeaderProps {
  onSearch: (data: ResType[] | undefined) => void;
}

class Header extends Component<HeaderProps> {
  render(): ReactNode {
    return (
      <>
        <header className="header">
          <img src={SWLogo} alt="star wars logo" className="header__swapi-logo" />
          <ErrorButton className="header__test-btn">Test button</ErrorButton>
          <Form onSearch={this.props.onSearch}></Form>
        </header>
      </>
    );
  }
}

export default Header;
