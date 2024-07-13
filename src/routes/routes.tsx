import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../views/ErrorPage/ErrorPage.tsx';
import DetailsBlock from '../components/DetailsBlock/DetailsBlock.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:charId',
        element: <DetailsBlock />,
      },
    ],
  },
]);

export { router };
