import Head from 'next/head';
import Header from '../components/Header/Header';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Pagination from '../components/Pagination/Pagination';
import Flyout from '../components/Flyout/Flyout';
import { InferGetServerSidePropsType } from 'next';
import { getPeople } from '../services/services.ts';
import { useAppDispatch } from '../hooks/hooks.ts';
import { updatePeople } from '../features/people/peopleSlice.ts';
import { setPagesCount } from '../features/pagination/paginationSlice.ts';
import { calcPagesCount, getCharId } from '../utils/utils.ts';
import DetailsBlock from '../components/DetailsBlock/DetailsBlock.tsx';

export interface IContext {
  query: { search: string; page: string; details: string };
}

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps = async (context: IContext) => {
  if (context.query.details) {
    const detailsId = context.query.details;
    const peopleData = await getPeople();
    const charData = peopleData.results.filter((char) => getCharId(char.url) === detailsId)[0];

    return {
      props: { peopleData, charData },
    };
  }

  const query = context.query.search ?? '';
  const page = Number.isNaN(Number(context.query.page)) ? 1 : Number(context.query.page);

  const peopleData = await getPeople(query, page);
  return {
    props: { peopleData, charData: null },
  };
};

export default function App({ peopleData, charData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();

  const people = peopleData.results;
  dispatch(updatePeople(people));
  const pages = calcPagesCount(peopleData.count);
  dispatch(setPagesCount(pages));

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header></Header>
      <main className="Main">
        <CardsBlock people={people} />
        <div className="details" data-testid="details">
          {charData ? <DetailsBlock data={charData} /> : null}
        </div>
      </main>
      {people ? <Pagination /> : null}
      <Flyout />
    </>
  );
}
