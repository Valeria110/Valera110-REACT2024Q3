import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UncontrolledFormPage from '../components/UncontrolledFormPage/UncontrolledFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form',
    element: <UncontrolledFormPage />,
  },
]);

export { router };
