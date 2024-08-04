import './DetailsBlock.scss';
import { useContext, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader.tsx';
import Button from '../Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import ListItem from '../ListItem/ListItem.tsx';
import { ResType } from '../../types/types.ts';
import { useNavigate } from '@remix-run/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface DetailsBlockProps {
  charData: ResType;
  searchTerm: string;
  page: number;
}

function DetailsBlock({ charData, searchTerm, page }: DetailsBlockProps) {
  const detailsBlockRef = useRef<HTMLUListElement>(null);
  const [colorTheme] = useContext(ColorThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('click', handleClick);
  });

  function handleClick(e: Event) {
    if (!detailsBlockRef.current?.contains(e.target as Node) && !(e.target instanceof HTMLAnchorElement)) {
      navigate(`/?page=${page}&searchTerm=${searchTerm}`, { preventScrollReset: true });
    }
    window.removeEventListener('click', handleClick);
  }

  return charData ? (
    <ul
      ref={detailsBlockRef}
      className={`DetailsBlock main__card-list-details  ${colorTheme}`}
      data-testid="details-block"
    >
      <Button
        className={`DetailsBlock__close-btn ${colorTheme}`}
        disabled={false}
        handleClick={() => navigate(`/?page=${page}&searchTerm=${searchTerm}`, { preventScrollReset: true })}
      >
        <FontAwesomeIcon icon={faXmark} style={{ color: `${colorTheme !== 'dark' ? '#000' : '#fff'}` }} />
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
