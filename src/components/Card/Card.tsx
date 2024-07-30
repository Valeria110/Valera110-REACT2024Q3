import React, { useContext } from 'react';
import { IProps, ResType } from '../../types/types.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { addSelectedChar, removeSelectedChar } from '../../features/people/selectedPeopleSlice.ts';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import ListItem from '../ListItem/ListItem.tsx';
import Link from 'next/link';
import { getCharId } from '../../utils/utils.ts';

interface CardProps extends IProps {
  char: ResType;
}

function Card({ char }: CardProps) {
  const { name, birth_year } = char;
  const dispatch = useAppDispatch();
  const selectedPeople = useAppSelector((state) => state.selectedPeople);
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const page = useAppSelector((state) => state.pagination.page);
  const isCharSelected = selectedPeople.find((selectedPerson) => selectedPerson.url === char.url) ? true : false;
  const [colorTheme] = useContext(ColorThemeContext);
  const charId = getCharId(char.url);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch(addSelectedChar({ url: char.url, isSelected: true }));
    } else {
      dispatch(removeSelectedChar({ url: char.url, isSelected: false }));
    }
  }

  return (
    <ul className={`main__card-list ${colorTheme}`} data-testid="card">
      <ListItem className="main__card-list-item card__name" label="Name: " value={name}></ListItem>
      <ListItem className="main__card-list-item card__birth-year" label="Birth year: " value={birth_year}></ListItem>

      <label className="card__checkbox-label">
        Select item
        <input checked={isCharSelected} type="checkbox" onChange={handleChange} />
      </label>
      <Link className="view-details-link" href={`/?page=${page}&search=${searchTerm}&details=${charId}`}>
        View details
      </Link>
    </ul>
  );
}

export default Card;
