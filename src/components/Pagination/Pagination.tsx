import { useContext, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { changeToNextPage, changeToPrevPage, setCurPage } from '../../features/pagination/paginationSlice.ts';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useRouter } from 'next/navigation';

function Pagination() {
  const pageNum = useAppSelector((state) => state.pagination.page);
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const pagesCount = useAppSelector((state) => state.pagination.pagesCount);

  const [inputValue, setInputValue] = useState(pageNum);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [colorTheme] = useContext(ColorThemeContext);

  const prevPage = () => {
    dispatch(changeToPrevPage());
    setInputValue((p) => p - 1);
    router.push(`/?page=${pageNum - 1}&search=${searchTerm}`, { scroll: false });
  };

  const nextPage = () => {
    dispatch(changeToNextPage());
    setInputValue((p) => p + 1);
    router.push(`/?page=${pageNum + 1}&search=${searchTerm}`, { scroll: false });
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
        router.push(`/?page=${value}&search=${searchTerm}`, { scroll: false });
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
