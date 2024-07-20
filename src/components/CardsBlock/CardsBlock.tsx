import { ResType } from '../../types/types.ts';
import { useAppSelector } from '../../hooks/hooks.ts';
import Card from '../Card/Card.tsx';
import Loader from '../Loader/Loader.tsx';

interface CardsBlockProps {
  isFetching: boolean;
}

function generateCards(people: ResType[]) {
  return people.length ? (
    people.map((char) => <Card key={char.url} char={char}></Card>)
  ) : (
    <h3 className="Main__not-found-text">No people found</h3>
  );
}

function CardsBlock({ isFetching }: CardsBlockProps) {
  const people = useAppSelector((state) => state.people);

  return <div className="Main__left-section">{isFetching ? <Loader></Loader> : generateCards(people)}</div>;
}

export default CardsBlock;
