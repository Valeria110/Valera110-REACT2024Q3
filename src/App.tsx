import { Component, ReactNode } from 'react';
import './App.scss';
import { ErrorBoundary } from './utils/utils.tsx';
import Header from './components/Header/Header.tsx';
import { IProps, ResType } from './types/types.ts';
import { fetchPeople, FetchPeopleReturnType, searchPeopleByName } from './services/services.ts';
import Card from './components/Card/Card.tsx';
import Loader from './components/Loader/Loader.tsx';

interface AppState {
  people: ResType[] | null;
}

class App extends Component<IProps, AppState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      people: null,
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

  onSearch(searchTerm: string) {
    this.setState({ people: null });

    searchPeopleByName(searchTerm)
      .then((data) => {
        if (data) {
          this.setState({ people: data });
        } else {
          this.setState({ people: [] });
        }
      })
      .catch((err: unknown) => {
        if (typeof err === 'string') {
          console.error(`Error while searching: ${err}`);
        }
      });
  }

  render(): ReactNode {
    const { people } = this.state;

    return (
      <>
        <ErrorBoundary>
          <Header onSearch={this.onSearch}></Header>
          <main className="main">
            {people ? (
              people.length ? (
                people.map((char) => <Card key={char.url} char={char}></Card>)
              ) : (
                <h3 className="main__not-found-text">No people found</h3>
              )
            ) : (
              <Loader></Loader>
            )}
          </main>
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
