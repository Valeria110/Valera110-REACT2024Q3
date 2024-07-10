import './DetailsBlock.scss';
import { ReactNode, useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.tsx';
import { ResType } from '../../types/types.ts';

interface CharDataState {
  people: ResType | null;
}

function DetailsBlock(): ReactNode {
  const people = useOutletContext() as ResType[] | null;
  const [charData, setCharData] = useState<CharDataState['people']>(null);
  const { charId } = useParams();

  useEffect(() => {
    setCharData(null);
    setTimeout(() => {
      if (people?.length) {
        const charItem = people.filter((char) => char.name === charId);
        setCharData(charItem[0]);
      }
    }, 1500);
  }, [charId, people]);

  return charData ? (
    <ul className="main__card-list">
      <h1 className="DetailsBlock__header">Details:</h1>
      <li className="main__card-list-item card__height">
        <b>Height:</b> {charData.height ? charData.height : 'unknown'}
      </li>
      <li className="main__card-list-item card__mass">
        <b>Mass:</b> {charData.mass ? charData.mass : 'unknown'}
      </li>
      <li className="main__card-list-item card__hair">
        <b>Hair color:</b> {charData.hairColor ? charData.hairColor : 'unknown'}
      </li>
      <li className="main__card-list-item card__skin">
        <b>Skin color:</b> {charData.skinColor ? charData.skinColor : 'unknown'}
      </li>
      <li className="main__card-list-item card__eyes">
        <b>Eye color:</b> {charData.eyeColor ? charData.eyeColor : 'unknown'}
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
