import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';
import './Form.scss';
import { IProps, ResType } from '../../types/types.ts';
import { searchPeopleByName } from '../../services/services.ts';

interface FormState {
  value: string;
}

interface FormProps extends IProps {
  onSearch: (data: ResType[] | undefined) => void;
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    const prevSearchTerm = localStorage.getItem('prevSearchTerm') ?? '';
    this.state = {
      value: prevSearchTerm,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem('prevSearchTerm', this.state.value);
    searchPeopleByName(this.state.value)
      .then((data) => {
        this.props.onSearch(data);
      })
      .catch((err: unknown) => {
        if (typeof err === 'string') {
          console.error(`Error while searching: ${err}`);
        }
      });
  }

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value.trim() });
  }

  render(): ReactNode {
    return (
      <>
        <form action="GET" className="header__form" onSubmit={this.onSubmit}>
          <input
            className="header__search-input"
            placeholder="Search by name..."
            value={this.state.value}
            type="search"
            onChange={this.onChange}
          />
          <button className="header__form-submit-btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </>
    );
  }
}

export default Form;
