import './Pagination.scss';
import { ReactNode } from 'react';
import Button from '../Button/Button.tsx';

interface PaginationProps {
  pagesCount: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
}

function Pagination({ pagesCount, setPageNum, pageNum }: PaginationProps): ReactNode {
  const prevPage = () => {
    setPageNum((p) => p - 1);
  };

  const nextPage = () => {
    setPageNum((p) => p + 1);
  };

  return (
    <div className="Pagination Pagination-wrapper">
      <Button
        disabled={pageNum < 2}
        className="Pagination-wrapper__btn Pagination-wrapper__btn-prev"
        onClick={prevPage}
      >
        Prev
      </Button>
      <Button
        disabled={pageNum === pagesCount}
        className="Pagination-wrapper__btn Pagination-wrapper__btn-next"
        onClick={nextPage}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
