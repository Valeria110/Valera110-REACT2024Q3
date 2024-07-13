import { ReactNode } from 'react';
import './Header.scss';
import SWLogo from '../../assets/star-wars-logo.png';
import ErrorButton from '../ErrorButton/ErrorButton.tsx';
import Form from '../Form/Form.tsx';

interface HeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  prevSearchTerm: string;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ setSearchTerm, prevSearchTerm, setPageNum }: HeaderProps): ReactNode {
  return (
    <>
      <header className="Header">
        <img src={SWLogo} alt="star wars logo" className="Header__swapi-logo" />
        <ErrorButton className="Header__test-btn">Test button</ErrorButton>
        <Form setSearchTerm={setSearchTerm} prevSearchTerm={prevSearchTerm} setPageNum={setPageNum}></Form>
      </header>
    </>
  );
}

export default Header;
