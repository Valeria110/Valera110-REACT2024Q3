import Head from 'next/head';
import Header from '../components/Header/Header';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import Pagination from '../components/Pagination/Pagination';
import Flyout from '../components/Flyout/Flyout';
import { InferGetServerSidePropsType } from 'next';
import { getPeople, getPeopleById } from '../services/services.ts';
import { useAppDispatch } from '../hooks/hooks.ts';
import { updatePeople } from '../features/people/peopleSlice.ts';
import { setCurPage, setPagesCount } from '../features/pagination/paginationSlice.ts';
import { calcPagesCount } from '../utils/utils.ts';
import DetailsBlock from '../components/DetailsBlock/DetailsBlock.tsx';
import { setNewSearchTerm } from '../features/searchTerm/searchTermSlice.ts';

export interface IContext {
  query: { search: string; page: string; details: string };
}

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps = async (context: IContext) => {
  const query = context.query.search ?? '';
  const page = Number.isNaN(Number(context.query.page)) ? 1 : Number(context.query.page);

  const peopleData = await getPeople(query, page);

  if (context.query.details) {
    const detailsId = context.query.details;
    const charData = await getPeopleById(detailsId);

    return {
      props: {
        data: {
          peopleData,
          charData,
          query,
          page,
        },
      },
    };
  }

  return {
    props: {
      data: {
        peopleData,
        charData: null,
        query,
        page,
      },
    },
  };
};

export default function App({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();

  const people = data.peopleData.results;
  dispatch(updatePeople(people));
  const pages = calcPagesCount(data.peopleData.count);
  dispatch(setPagesCount(pages));
  dispatch(setCurPage(data.page));
  dispatch(setNewSearchTerm(data.query));

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header></Header>
      <main className="Main">
        <CardsBlock />
        <div className="details" data-testid="details">
          {data.charData ? <DetailsBlock data={data.charData} /> : null}
        </div>
      </main>
      {people ? <Pagination /> : null}
      <Flyout people={data.peopleData.results} />
    </>
  );
}
