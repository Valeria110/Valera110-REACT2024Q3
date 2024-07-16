import { ReactNode } from 'react';
import './Card.scss';
import { IProps, ResType } from '../../types/types.ts';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks.ts';

interface CardProps extends IProps {
  char: ResType;
}

function Card({ char }: CardProps): ReactNode {
  const { name, birthYear } = char;
  const pageNum = useAppSelector((state) => state.pagination);

  return (
    <ul className="main__card-list" data-testid="card">
      <li className="main__card-list-item card__name">
        <b>Name:</b> {name}
      </li>
      <li className="main__card-list-item card__birth-year">
        <b>Birth year:</b> {birthYear ? birthYear : 'unknown'}
      </li>

      <Link to={`details/${char.name}?page=${pageNum}`}>View details</Link>
    </ul>
  );
}

export default Card;
