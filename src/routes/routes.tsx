import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../views/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

// function getPeopleLoader(args: LoaderFunctionArgs) {
//   const { pageId } = args.params;
//   return searchPeopleByName(storedSearchTerm, Number(pageId));
// }

export { router };
