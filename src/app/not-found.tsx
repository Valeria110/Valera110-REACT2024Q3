'use client';

import { useRouter } from 'next/navigation';
import Button from '../components/Button/Button.tsx';
import { ColorThemeContext } from '../utils/colorThemeContext.tsx';
import { useContext } from 'react';
import { useAppSelector } from '../hooks/hooks.ts';

function ErrorPage() {
  const router = useRouter();
  const [colorTheme] = useContext(ColorThemeContext);
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const page = useAppSelector((state) => state.pagination.page);

  return (
    <div className={`Error ${colorTheme}`}>
      <h1 className="Error__header">Oops!</h1>
      <p className="Error__error-msg">
        <span className="Error__error-status">404</span>
        <span className="Error__error-msg-text">Page not found</span>
      </p>
      <Button
        className={`Error__go-back-btn ${colorTheme}`}
        disabled={false}
        handleClick={() => router.replace(`/?page=${page}&search=${searchTerm}`)}
      >
        Go back
      </Button>
    </div>
  );
}

export default ErrorPage;
