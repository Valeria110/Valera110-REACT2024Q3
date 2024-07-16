import './Pagination.scss';
import { ReactNode, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { changeToNextPage, changeToPrevPage, setCurPage } from '../../features/pagination/paginationSlice.ts';

function Pagination(): ReactNode {
  const pageNum = useAppSelector((state) => state.pagination.page);
  const pagesCount = useAppSelector((state) => state.pagination.pagesCount);
  const [, setInputValue] = useState(pageNum);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const prevPage = () => {
    dispatch(changeToPrevPage());
    setInputValue((p) => p - 1);
    navigate('/');
  };

  const nextPage = () => {
    dispatch(changeToNextPage());
    setInputValue((p) => p + 1);
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
        dispatch(setCurPage(value));
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
        value={pageNum}
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
