import { ReactNode } from 'react';
import './Loader.scss';

function Loader(): ReactNode {
  return (
    <div className="loader-mask" data-testid="loader">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
