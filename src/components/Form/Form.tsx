import { ChangeEvent, FormEvent, useState } from 'react';
import './Form.scss';
import { IProps } from '../../types/types.ts';

interface FormProps extends IProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  prevSearchTerm: string;
}

function Form({ setSearchTerm, prevSearchTerm }: FormProps) {
  const [searchQuery, setSearchQuery] = useState(() => prevSearchTerm ?? '');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <>
      <form action="GET" className="header__form" onSubmit={onSubmit}>
        <input
          className="header__search-input"
          placeholder="Search by name..."
          value={searchQuery}
          type="search"
          onChange={onChange}
        />
        <button className="header__form-submit-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default Form;
