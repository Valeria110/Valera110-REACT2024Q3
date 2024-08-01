'use client';

import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  const [colorTheme] = useContext(ColorThemeContext);
  const [searchQuery, setSearchQuery] = useState(() => searchTerm ?? '');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/?page=${1}&search=${searchQuery.trim()}`, { scroll: false });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <form action="GET" className="Header__form" onSubmit={onSubmit}>
        <input
          className="Header__search-input"
          placeholder="Search by name..."
          value={searchQuery}
          type="search"
          name="search"
          onChange={onChange}
        />
        <button className={`Header__form-submit-btn ${colorTheme}`} type="submit" aria-label="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

export default Form;
