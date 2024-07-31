import { ResType } from '../../types/types.ts';
import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../../hooks/hooks.ts';
import Button from '../../components/Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function DetailsBlock({ data }: { data: ResType }) {
  const detailsBlockRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const page = useAppSelector((state) => state.pagination.page);
  const [colorTheme] = useContext(ColorThemeContext);

  useEffect(() => {
    window.addEventListener('click', handleClick);
  });

  function handleClick(e: Event) {
    if (!detailsBlockRef.current?.contains(e.target as Node) && !(e.target instanceof HTMLAnchorElement)) {
      router.push(`/?page=${page}&search=${searchTerm}`, { scroll: false });
    }
  }

  return (
    <ul ref={detailsBlockRef} className={`DetailsBlock main__card-list  ${colorTheme}`} data-testid="details-block">
      <Button
        className={`DetailsBlock__close-btn ${colorTheme}`}
        disabled={false}
        handleClick={() => router.push(`/?page=${page}&search=${searchTerm}`, { scroll: false })}
      >
        <FontAwesomeIcon icon={faXmark} style={{ color: `${colorTheme !== 'dark' ? '#000' : '#fff'}` }} />
      </Button>
      <h1 className="DetailsBlock__header">Details:</h1>
      <ListItem label="Height: " value={data.height} className="main__card-list-item card__height" />
      <ListItem label="Mass: " value={data.mass} className="main__card-list-item card__mass" />
      <ListItem label="Hair color: " value={data.hair_color} className="main__card-list-item card__hair" />
      <ListItem label="Skin color: " value={data.skin_color} className="main__card-list-item card__skin" />
      <ListItem label="Eye color: " value={data.eye_color} className="main__card-list-item card__eyes" />
      <ListItem label="Gender: " value={data.gender} className="main__card-list-item card__gender" />
    </ul>
  );
}
