import { ChangeEvent, FormEvent, useState } from 'react';
import './Form.scss';
import { IProps } from '../../types/types.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { setCurPage } from '../../features/pagination/paginationSlice.ts';
import { setNewSearchTerm } from '../../features/searchTerm/searchTermSlice.ts';

interface FormProps extends IProps {
  prevSearchTerm: string;
}

function Form({ prevSearchTerm }: FormProps) {
  const [searchQuery, setSearchQuery] = useState(() => prevSearchTerm ?? '');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setNewSearchTerm(searchQuery.trim()));
    dispatch(setCurPage(1));
    navigate('/');
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
        <button className="Header__form-submit-btn" type="submit" aria-label="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default Form;
