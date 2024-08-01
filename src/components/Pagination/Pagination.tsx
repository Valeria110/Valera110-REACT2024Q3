'use client';

import { useContext, useEffect, useState } from 'react';
import Button from '../Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  pagesCount: number;
}

function Pagination({ pagesCount }: PaginationProps) {
  const searchParams = useSearchParams();
  const pageNum = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const searchTerm = searchParams.get('search') ?? '';
  const router = useRouter();
  const [colorTheme] = useContext(ColorThemeContext);
  const [inputValue, setInputValue] = useState(pageNum);

  useEffect(() => {
    setInputValue(pageNum);
  }, [pageNum]);

  const prevPage = () => {
    setInputValue((p) => p - 1);
    router.push(`/?page=${pageNum - 1}&search=${searchTerm}`, { scroll: false });
  };

  const nextPage = () => {
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
