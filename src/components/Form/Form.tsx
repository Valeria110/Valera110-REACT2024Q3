import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';
import './Form.scss';
import { IProps } from '../../types/types.ts';

interface FormState {
  value: string;
}

class Form extends Component<IProps, FormState> {
  constructor(props: IProps) {
    super(props);
    const prevSearchTerm = localStorage.getItem('prevSearchTerm');
    this.state = {
      value: prevSearchTerm ? prevSearchTerm : '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem('prevSearchTerm', this.state.value);
  }

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
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