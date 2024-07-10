import { ReactNode, useEffect, useState } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Header from './components/Header/Header.tsx';
import { ResType } from './types/types.ts';
import { searchPeopleByName } from './services/services.ts';
import Pagination from './components/Pagination/Pagination.tsx';
import { calcPagesCount } from './utils/utils.ts';
import { Outlet, useSearchParams } from 'react-router-dom';
import CardsBlock from './components/CardsBlock/CardsBlock.tsx';

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

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPeople(null);

    searchPeopleByName(searchTerm, pageNum)
      .then((data) => {
        if (data && data.people) {
          setPeople(data.people);
          const pages = calcPagesCount(data.peopleCount);
          setPagesCount(pages);
          setSearchParams({ page: `${pageNum}` });
        } else {
          setPeople([]);
        }
      })
      .catch((err: unknown) => {
        if (typeof err === 'string') {
          console.error(`Error while searching: ${err}`);
        }
      });
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, pageNum]);

  return (
    <>
      <ErrorBoundary>
        <Header setSearchTerm={setSearchTerm} prevSearchTerm={searchTerm} setPageNum={setPageNum}></Header>
        <main className="Main">
          <CardsBlock pageNum={pageNum} people={people} />
          <div className="details">
            <Outlet context={people} />
          </div>
        </main>
        {people ? <Pagination pagesCount={pagesCount} setPageNum={setPageNum} pageNum={pageNum} /> : null}
      </ErrorBoundary>
    </>
  );
}

export default App;
