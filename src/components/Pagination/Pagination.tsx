import './Pagination.scss';
import { useContext, useEffect, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';

interface PaginationProps {
  pageNum: number;
  pagesCount: number;
  searchTerm: string;
}

function Pagination({ pageNum, pagesCount, searchTerm }: PaginationProps) {
  const [inputValue, setInputValue] = useState(pageNum);
  const navigate = useNavigate();
  const [colorTheme] = useContext(ColorThemeContext);

  useEffect(() => {
    setInputValue(pageNum);
  }, [pageNum]);

  const prevPage = () => {
    setInputValue((p) => p - 1);
    navigate(`/?page=${pageNum - 1}&search=${searchTerm}`, { preventScrollReset: true });
  };

  const nextPage = () => {
    setInputValue((p) => p + 1);
    navigate(`/?page=${pageNum + 1}&search=${searchTerm}`, { preventScrollReset: true });
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
        navigate(`/?page=${value}&search=${searchTerm}`, { preventScrollReset: true });
      }
    }
  };

  return (
    <div className="Pagination Pagination-wrapper">
      <Button
        disabled={pageNum < 2}
        className={`Pagination-wrapper__btn Pagination-wrapper__btn-prev ${colorTheme}`}
        handleClick={prevPage}
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
        className={`Pagination-wrapper__btn Pagination-wrapper__btn-next ${colorTheme}`}
        handleClick={nextPage}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
