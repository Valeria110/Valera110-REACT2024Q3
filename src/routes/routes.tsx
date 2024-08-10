import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UncontrolledForm from '../components/UncontrolledForm/UncontrolledForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form',
    element: <UncontrolledForm />,
  },
]);

export { router };
