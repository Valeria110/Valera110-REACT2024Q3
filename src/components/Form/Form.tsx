import { ChangeEvent, FormEvent, useState } from 'react';
import './Form.scss';
import { IProps } from '../../types/types.ts';

interface FormProps extends IProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  prevSearchTerm: string;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

function Form({ setSearchTerm, prevSearchTerm, setPageNum }: FormProps) {
  const [searchQuery, setSearchQuery] = useState(() => prevSearchTerm ?? '');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
    setPageNum(1);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <>
      <form action="GET" className="Header__form" onSubmit={onSubmit}>
        <input
          className="Header__search-input"
          placeholder="Search by name..."
          value={searchQuery}
          type="search"
          onChange={onChange}
        />
        <button className="Header__form-submit-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default Form;
