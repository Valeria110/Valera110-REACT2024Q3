import { Metadata } from 'next';
import { getPeople, getPeopleById } from '../services/services';
import DetailsBlock from '../components/DetailsBlock/DetailsBlock';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Pagination from '../components/Pagination/Pagination';
import { calcPagesCount } from '../utils/utils';
import Flyout from '../components/Flyout/Flyout';

export const metadata: Metadata = {
  title: 'Star wars',
};

export default async function App({ searchParams }: { searchParams: Record<string, string> }) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const searchTerm = searchParams.search ?? '';

  const peopleData = (await getPeople(searchTerm, page)).results;
  const pagesCount = calcPagesCount((await getPeople(searchTerm, page)).count);

  return (
    <>
      <main className="Main">
        <CardsBlock peopleData={peopleData} />
        <div className="details" data-testid="details">
          {searchParams.details ? <DetailsBlock data={await getPeopleById(searchParams.details)} page={page} /> : null}
        </div>
      </main>
      <Pagination pagesCount={pagesCount} />
      <Flyout peopleData={peopleData} />
    </>
  );
}
