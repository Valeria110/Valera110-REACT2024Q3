import { Component, ReactNode } from 'react';
import './App.scss';
import { ErrorBoundary } from './utils/utils.tsx';
import Header from './components/Header/Header.tsx';
import { IProps, ResType } from './types/types.ts';
import { fetchPeople, FetchPeopleReturnType } from './services/services.ts';
import Card from './components/Card/Card.tsx';

interface AppState {
  people: ResType[];
}

class App extends Component<IProps, AppState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      people: [],
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount(): void {
    fetchPeople().then((data: FetchPeopleReturnType) => {
      if (Array.isArray(data)) {
        this.setState({ people: data });
      }
    });
  }

  onSearch(data: ResType[] | undefined) {
    if (data) {
      this.setState({ people: data });
    } else {
      this.setState({ people: [] });
    }
  }

  render(): ReactNode {
    const { people } = this.state;

    return (
      <>
        <ErrorBoundary>
          <Header onSearch={this.onSearch}></Header>
          <main className="main">
            {people.length ? (
              people.map((char) => <Card key={char.url} char={char}></Card>)
            ) : (
              <h3 className="main__not-found-text">No people found</h3>
            )}
          </main>
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
