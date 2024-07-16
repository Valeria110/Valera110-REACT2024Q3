import { ReactNode } from 'react';
import './Header.scss';
import SWLogo from '../../assets/star-wars-logo.png';
import ErrorButton from '../ErrorButton/ErrorButton.tsx';
import Form from '../Form/Form.tsx';

interface HeaderProps {
  prevSearchTerm: string;
}

function Header({ prevSearchTerm }: HeaderProps): ReactNode {
  return (
    <>
      <header className="Header">
        <img src={SWLogo} alt="star wars logo" className="Header__swapi-logo" />
        <ErrorButton className="Header__test-btn">Test button</ErrorButton>
        <Form prevSearchTerm={prevSearchTerm}></Form>
      </header>
    </>
  );
}

export default Header;
