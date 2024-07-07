import { ReactNode, useEffect, useState } from 'react';
import './App.scss';
import { ErrorBoundary } from './utils/utils.tsx';
import Header from './components/Header/Header.tsx';
import { ResType } from './types/types.ts';
import { searchPeopleByName } from './services/services.ts';
import Card from './components/Card/Card.tsx';
import Loader from './components/Loader/Loader.tsx';

interface AppState {
  people: ResType[] | null;
}

const useLocalStorage = (initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [searchTerm, setSearchTerm] = useState(() => {
    const storedSearchTerm = localStorage.getItem('prevSearchTerm');
    return storedSearchTerm ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem('prevSearchTerm', searchTerm);

    return () => localStorage.clear();
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
};

function App(): ReactNode {
  const [people, setPeople] = useState<AppState['people']>(null);
  const [searchTerm, setSearchTerm] = useLocalStorage('');

  useEffect(() => {
    setPeople(null);

    searchPeopleByName(searchTerm)
      .then((data) => {
        if (data) {
          setPeople(data);
        } else {
          setPeople([]);
        }
      })
      .catch((err: unknown) => {
        if (typeof err === 'string') {
          console.error(`Error while searching: ${err}`);
        }
      });
  }, [searchTerm]);

  return (
    <>
      <ErrorBoundary>
        <Header setSearchTerm={setSearchTerm} prevSearchTerm={searchTerm}></Header>
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

export default App;
