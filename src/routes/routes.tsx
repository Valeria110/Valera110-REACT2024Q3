import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UncontrolledFormPage from '../components/UncontrolledFormPage/UncontrolledFormPage';
import ControlledFormPage from '../components/ControlledFormPage/ControlledFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form',
    element: <UncontrolledFormPage />,
  },
  {
    path: '/react-hook-form',
    element: <ControlledFormPage />,
  },
]);

export { router };
