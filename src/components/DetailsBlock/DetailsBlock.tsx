import './DetailsBlock.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.tsx';
import { ResType } from '../../types/types.ts';
import Button from '../Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import ListItem from '../ListItem/ListItem.tsx';

interface CharDataState {
  people: ResType | null;
}

function DetailsBlock() {
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
  }, [charId, navigate, people]);

  return charData ? (
    <ul ref={detailsBlockRef} className={`DetailsBlock main__card-list  ${colorTheme}`} data-testid="details-block">
      <Button className={`DetailsBlock__close-btn ${colorTheme}`} disabled={false} handleClick={() => navigate('/')}>
        <i className="fa-solid fa-xmark" style={{ color: `${colorTheme !== 'dark' ? '#000' : '#fff'}` }}></i>
      </Button>
      <h1 className="DetailsBlock__header">Details:</h1>
      <ListItem label="Height: " value={charData.height} className="main__card-list-item card__height" />
      <ListItem label="Mass: " value={charData.mass} className="main__card-list-item card__mass" />
      <ListItem label="Hair color: " value={charData.hair_color} className="main__card-list-item card__hair" />
      <ListItem label="Skin color: " value={charData.skin_color} className="main__card-list-item card__skin" />
      <ListItem label="Eye color: " value={charData.eye_color} className="main__card-list-item card__eyes" />
      <ListItem label="Gender: " value={charData.gender} className="main__card-list-item card__gender" />
    </ul>
  ) : (
    <Loader />
  );
}

export default DetailsBlock;
