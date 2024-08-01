import { ResType } from '../../types/types.ts';
import Card from '../Card/Card.tsx';

interface CardsBlockProps {
  peopleData: ResType[];
}

function generateCards(people: ResType[]) {
  return people && people.length ? (
    people.map((char) => <Card key={char.url} char={char}></Card>)
  ) : (
    <h3 className="Main__not-found-text">No people found</h3>
  );
}

async function CardsBlock({ peopleData }: CardsBlockProps) {
  return <div className="Main__left-section">{generateCards(peopleData)}</div>;
}

export default CardsBlock;
