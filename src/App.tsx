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
          <Header></Header>
          <main className="main">
            {people.map((char) => (
              <Card key={char.url} char={char}></Card>
            ))}
          </main>
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
