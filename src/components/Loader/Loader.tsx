import { Component, ReactNode } from 'react';
import './Loader.scss';

class Loader extends Component {
  render(): ReactNode {
    return (
      <div className="loader-mask">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
