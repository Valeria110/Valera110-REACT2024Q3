import { ResType } from '../../types/types.ts';
import Card from '../Card/Card.tsx';

interface CardsBlockProps {
  people: ResType[];
}

function generateCards(people: ResType[]) {
  return people && people.length ? (
    people.map((char) => <Card key={char.url} char={char}></Card>)
  ) : (
    <h3 className="Main__not-found-text">No people found</h3>
  );
}

function CardsBlock({ people }: CardsBlockProps) {
  // const people = useAppSelector((state) => state.people);

  return <div className="Main__left-section">{generateCards(people)}</div>;
}

export default CardsBlock;
