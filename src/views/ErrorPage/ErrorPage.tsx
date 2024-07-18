import { useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.scss';
import Button from '../../components/Button/Button.tsx';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useContext } from 'react';

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  const [colorTheme] = useContext(ColorThemeContext);

  return (
    <div className={`Error ${colorTheme}`}>
      <h1 className="Error__header">Oops!</h1>
      <p className="Error__error-msg">
        <span className="Error__error-status">404</span>
        <span className="Error__error-msg-text">Page not found</span>
      </p>
      <Button className={`Error__go-back-btn ${colorTheme}`} disabled={false} onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default ErrorPage;
