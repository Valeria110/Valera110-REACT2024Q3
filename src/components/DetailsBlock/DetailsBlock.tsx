import './DetailsBlock.scss';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.tsx';
import { ResType } from '../../types/types.ts';
import Button from '../Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';

interface CharDataState {
  people: ResType | null;
}

function DetailsBlock(): ReactNode {
  const people = useOutletContext() as ResType[] | null;
  const [charData, setCharData] = useState<CharDataState['people']>(null);
  const { charId } = useParams();
  const detailsBlockRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const [colorTheme] = useContext(ColorThemeContext);

  useEffect(() => {
    setCharData(null);
    window.addEventListener('click', handleClick);

    setTimeout(() => {
      if (people?.length) {
        const charItem = people.filter((char) => char.name === charId);
        setCharData(charItem[0]);
      }
    }, 1500);

    function handleClick(e: Event) {
      if (!detailsBlockRef.current?.contains(e.target as Node) && !(e.target instanceof HTMLAnchorElement)) {
        navigate('/');
      }
    }

    return () => {
      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charId, people]);

  return charData ? (
    <ul ref={detailsBlockRef} className={`DetailsBlock main__card-list  ${colorTheme}`} data-testid="details-block">
      <Button className={`DetailsBlock__close-btn ${colorTheme}`} disabled={false} onClick={() => navigate('/')}>
        <i className="fa-solid fa-xmark" style={{ color: `${colorTheme !== 'dark' ? '#000' : '#fff'}` }}></i>
      </Button>
      <h1 className="DetailsBlock__header">Details:</h1>
      <li className="main__card-list-item card__height">
        <b>Height:</b> {charData.height ? charData.height : 'unknown'}
      </li>
      <li className="main__card-list-item card__mass">
        <b>Mass:</b> {charData.mass ? charData.mass : 'unknown'}
      </li>
      <li className="main__card-list-item card__hair">
        <b>Hair color:</b> {charData.hair_color ? charData.hair_color : 'unknown'}
      </li>
      <li className="main__card-list-item card__skin">
        <b>Skin color:</b> {charData.skin_color ? charData.skin_color : 'unknown'}
      </li>
      <li className="main__card-list-item card__eyes">
        <b>Eye color:</b> {charData.eye_color ? charData.eye_color : 'unknown'}
      </li>
      <li className="main__card-list-item card__gender">
        <b>Gender:</b> {charData.gender ? charData.gender : 'unknown'}
      </li>
    </ul>
  ) : (
    <Loader />
  );
}

export default DetailsBlock;
