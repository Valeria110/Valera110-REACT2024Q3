import React, { ReactNode, useContext } from 'react';
import './Card.scss';
import { IProps, ResType } from '../../types/types.ts';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { addSelectedChar, removeSelectedChar } from '../../features/people/selectedPeopleSlice.ts';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';

interface CardProps extends IProps {
  char: ResType;
}

function Card({ char }: CardProps): ReactNode {
  const { name, birth_year } = char;
  const pageNum = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const selectedPeople = useAppSelector((state) => state.selectedPeople);
  const isCharSelected = selectedPeople.find((selectedPerson) => selectedPerson.url === char.url) ? true : false;
  const [colorTheme] = useContext(ColorThemeContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch(addSelectedChar({ url: char.url, isSelected: true }));
    } else {
      dispatch(removeSelectedChar({ url: char.url, isSelected: false }));
    }
  }

  return (
    <ul className={`main__card-list ${colorTheme}`} data-testid="card">
      <li className={`main__card-list-item card__name ${colorTheme}`}>
        <b>Name:</b> {name}
      </li>
      <li className={`main__card-list-item card__birth-year ${colorTheme}`}>
        <b>Birth year:</b> {birth_year ? birth_year : 'unknown'}
      </li>

      <label className="card__checkbox-label">
        Select item
        <input checked={isCharSelected} type="checkbox" onChange={handleChange} />
      </label>
      <Link className="view-details-link" to={`details/${char.name}?page=${pageNum}`}>
        View details
      </Link>
    </ul>
  );
}

export default Card;
