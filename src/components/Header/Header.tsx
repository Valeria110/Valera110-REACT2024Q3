import SWLogo from '../../assets/star-wars-logo.png';
import Form from '../Form/Form.tsx';
import ColorThemeButton from '../ColorThemeButton/ColorThemeButton.tsx';
import Image from 'next/image';

function Header() {
  return (
    <>
      <header className="Header">
        <Image src={SWLogo} alt="star wars logo" width={150} height={100} className="Header__swapi-logo" />
        <ColorThemeButton />
        <Form></Form>
      </header>
    </>
  );
}

export default Header;
