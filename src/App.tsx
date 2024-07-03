import { Component, ReactNode } from 'react';
import './App.scss';
import { ErrorBoundary } from './utils/utils.tsx';
import Header from './components/Header/Header.tsx';
import { IProps, ResType } from './types/types.ts';
import { fetchPeople, FetchPeopleReturnType } from './services/services.ts';

interface AppState {
  people: ResType[];
}

class App extends Component<IProps, AppState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount(): void {
    fetchPeople().then((data: FetchPeopleReturnType) => {
      if (Array.isArray(data)) {
        this.setState({ people: data });
        console.log(data);
      }
    });
  }

  render(): ReactNode {
    const { people } = this.state;

    return (
      <>
        <ErrorBoundary>
          <Header prevSearchTerm=""></Header>
          <h1>Hello!</h1>
          <ul>
            {people.map((char) => (
              <li key={char.url}>{char.name}</li>
            ))}
          </ul>
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
