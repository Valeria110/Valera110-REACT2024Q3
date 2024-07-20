import { useEffect } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Header from './components/Header/Header.tsx';
import { useGetPeopleByPageQuery } from './services/services.ts';
import Pagination from './components/Pagination/Pagination.tsx';
import { calcPagesCount } from './utils/utils.ts';
import { Outlet, useSearchParams } from 'react-router-dom';
import CardsBlock from './components/CardsBlock/CardsBlock.tsx';
import { useLocalStorage } from './hooks/useLocalStorage.ts';
import { useAppDispatch, useAppSelector } from './hooks/hooks.ts';
import { updatePeople } from './features/people/peopleSlice.ts';
import { setPagesCount } from './features/pagination/paginationSlice.ts';
import Flyout from './components/Flyout/Flyout.tsx';

function App() {
  const people = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();
  useLocalStorage();
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const pageNum = useAppSelector((state) => state.pagination.page);
  const [, setSearchParams] = useSearchParams();

  const { data: peopleResponse, error, isFetching } = useGetPeopleByPageQuery({ page: pageNum, query: searchTerm });

  useEffect(() => {
    if (!isFetching && !error) {
      if (peopleResponse) {
        dispatch(updatePeople(peopleResponse.people));
        const pages = calcPagesCount(peopleResponse.count);
        dispatch(setPagesCount(pages));
        setSearchParams({ page: `${pageNum}` });
      } else {
        dispatch(updatePeople([]));
      }
    }
  }, [peopleResponse, isFetching, error, dispatch, setSearchParams, pageNum]);

  return (
    <>
      <ErrorBoundary>
        <Header prevSearchTerm={searchTerm}></Header>
        <main className="Main">
          <CardsBlock isFetching={isFetching} />
          <div className="details" data-testid="details">
            <Outlet context={people} />
          </div>
        </main>
        {people ? <Pagination /> : null}
        <Flyout />
      </ErrorBoundary>
    </>
  );
}

export default App;
