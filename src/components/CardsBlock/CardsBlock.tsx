import { useAppSelector } from '../../hooks/hooks.ts';
import Card from '../Card/Card.tsx';
import Loader from '../Loader/Loader.tsx';

interface CardsBlockProps {
  isFetching: boolean;
}

function CardsBlock({ isFetching }: CardsBlockProps) {
  const people = useAppSelector((state) => state.people);

  return (
    <div className="Main__left-section">
      {isFetching ? (
        <Loader></Loader>
      ) : people.length ? (
        people.map((char) => <Card key={char.url} char={char}></Card>)
      ) : (
        <h3 className="Main__not-found-text">No people found</h3>
      )}
    </div>
  );
}

export default CardsBlock;
