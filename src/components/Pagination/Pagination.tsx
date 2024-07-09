import './Pagination.scss';
import { ReactNode, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  pagesCount: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
}

function Pagination({ pagesCount, setPageNum, pageNum }: PaginationProps): ReactNode {
  const [inputValue, setInputValue] = useState(pageNum);
  const navigate = useNavigate();
  const prevPage = () => {
    setPageNum((p) => p - 1);
    navigate('/');
  };

  const nextPage = () => {
    setPageNum((p) => p + 1);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setInputValue(Number(e.target.value));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = Number((e.target as HTMLInputElement).value);
      if (!Number.isNaN(value)) {
        setPageNum(value);
        navigate('/');
      }
    }
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
      <input
        className="Pagination-wrapper__input"
        type="text"
        value={inputValue}
        name="page"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
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
