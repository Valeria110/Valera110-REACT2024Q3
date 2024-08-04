import './styles/global.scss';
import './styles/App.scss';

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useNavigation } from '@remix-run/react';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';
import ColorThemeProvider from '../utils/colorThemeContext.tsx';
import Header from '../components/Header/Header.tsx';
import Pagination from '../components/Pagination/Pagination.tsx';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { getPeople } from '../services/services.ts';
import CardsBlock from '../components/CardsBlock/CardsBlock.tsx';
import Loader from '../components/Loader/Loader.tsx';
import { calcPagesCount } from '../utils/utils.ts';
import { ReactNode } from 'react';
import Flyout from '../components/Flyout/Flyout.tsx';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') ?? '';
  const page = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
  const data = await getPeople(searchTerm, page);
  const people = data.results;
  const pagesCount = calcPagesCount(data.count);

  return json({ people, pagesCount, page, searchTerm });
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ColorThemeProvider>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body>
            {children}
            <ScrollRestoration />
            <script src="https://kit.fontawesome.com/33f66d1570.js" crossOrigin="anonymous"></script>
            <Scripts />
          </body>
        </html>
      </ColorThemeProvider>
    </Provider>
  );
}

export default function App() {
  const { people, pagesCount, page, searchTerm } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <div id="root" data-testid="root">
      <Header></Header>
      <main className="Main">
        {navigation.state === 'loading' ? <Loader /> : <CardsBlock people={people} />}
        <div className="details" data-testid="details">
          <Outlet />
        </div>
      </main>
      <Pagination pagesCount={pagesCount} pageNum={page} searchTerm={searchTerm} />
      <Flyout peopleData={people} />
    </div>
  );
}
