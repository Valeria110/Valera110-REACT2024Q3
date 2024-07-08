import { ReactNode, useEffect, useState } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Header from './components/Header/Header.tsx';
import { ResType } from './types/types.ts';
import { searchPeopleByName } from './services/services.ts';
import Card from './components/Card/Card.tsx';
import Loader from './components/Loader/Loader.tsx';
import Pagination from './components/Pagination/Pagination.tsx';
import { calcPagesCount } from './utils/utils.ts';

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
  const [pagesCount, setPagesCount] = useState(1);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setPeople(null);

    searchPeopleByName(searchTerm, pageNum)
      .then((data) => {
        if (data && data.people) {
          setPeople(data.people);
          const pages = calcPagesCount(data.peopleCount);
          setPagesCount(pages);
        } else {
          setPeople([]);
        }
      })
      .catch((err: unknown) => {
        if (typeof err === 'string') {
          console.error(`Error while searching: ${err}`);
        }
      });
  }, [searchTerm, pageNum]);

  return (
    <>
      <ErrorBoundary>
        <Header setSearchTerm={setSearchTerm} prevSearchTerm={searchTerm} setPageNum={setPageNum}></Header>
        <main className="Main">
          {people ? (
            people.length ? (
              people.map((char) => <Card key={char.url} char={char}></Card>)
            ) : (
              <h3 className="Main__not-found-text">No people found</h3>
            )
          ) : (
            <Loader></Loader>
          )}
        </main>
        {people ? <Pagination pagesCount={pagesCount} setPageNum={setPageNum} pageNum={pageNum} /> : null}
      </ErrorBoundary>
    </>
  );
}

export default App;
