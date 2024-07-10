import { ResType } from '../../types/types.ts';
import Card from '../Card/Card.tsx';
import Loader from '../Loader/Loader.tsx';

interface CardsBlockProps {
  people: ResType[] | null;
  pageNum: number;
}

function CardsBlock({ people, pageNum }: CardsBlockProps) {
  return (
    <div className="Main__left-section">
      {people ? (
        people.length ? (
          people.map((char) => <Card pageNum={pageNum} key={char.url} char={char}></Card>)
        ) : (
          <h3 className="Main__not-found-text">No people found</h3>
        )
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default CardsBlock;
