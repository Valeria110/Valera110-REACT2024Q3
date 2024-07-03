import { Component, ReactNode } from 'react';
import './Card.scss';
import { IProps, ResType } from '../../types/types.ts';

interface Props extends IProps {
  char: ResType;
}

class Card extends Component<Props> {
  render(): ReactNode {
    const { name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender } = this.props.char;
    return (
      <ul className="main__card-list">
        <li className="main__card-list-item card__name">
          <b>Name:</b> {name}
        </li>
        <li className="main__card-list-item card__height">
          <b>Height:</b> {height ? height : 'unknown'}
        </li>
        <li className="main__card-list-item card__mass">
          <b>Mass:</b> {mass ? mass : 'unknown'}
        </li>
        <li className="main__card-list-item card__hair">
          <b>Hair color:</b> {hairColor ? hairColor : 'unknown'}
        </li>
        <li className="main__card-list-item card__skin">
          <b>Skin color:</b> {skinColor ? skinColor : 'unknown'}
        </li>
        <li className="main__card-list-item card__eyes">
          <b>Eye color:</b> {eyeColor ? eyeColor : 'unknown'}
        </li>
        <li className="main__card-list-item card__birth-year">
          <b>Birth year:</b> {birthYear ? birthYear : 'unknown'}
        </li>
        <li className="main__card-list-item card__gender">
          <b>Gender:</b> {gender ? gender : 'unknown'}
        </li>
      </ul>
    );
  }
}

export default Card;
