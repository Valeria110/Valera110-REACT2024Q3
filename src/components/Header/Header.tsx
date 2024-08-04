import './Header.scss';
import SWLogo from '../../assets/star-wars-logo.png';
import Form from '../Form/Form.tsx';
import ColorThemeButton from '../ColorThemeButton/ColorThemeButton.tsx';

function Header() {
  return (
    <>
      <header className="Header">
        <img src={SWLogo} alt="star wars logo" className="Header__swapi-logo" />
        <ColorThemeButton />
        <Form></Form>
      </header>
    </>
  );
}

export default Header;
