import { useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.scss';
import Button from '../../components/Button/Button.tsx';

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className="Error">
      <h1 className="Error__header">Oops!</h1>
      <p className="Error__error-msg">
        <span className="Error__error-status">404</span>
        <span className="Error__error-msg-text">Page not found</span>
      </p>
      <Button className="Error__go-back-btn" disabled={false} onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default ErrorPage;
