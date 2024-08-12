import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardsBLock from '../CardsBlock/CardsBLock';

export default function MainPage() {
  return (
    <>
      <div className="header">
        <h1 className={styles.headerTitle}>
          Hello! Nice to meet you <FontAwesomeIcon icon={faFaceSmile} />
        </h1>
        <div className={styles.linksWrapper}>
          <Link className={styles.link} to="form">
            Form
          </Link>
          <Link className={styles.link} to="react-hook-form">
            React Hook Form
          </Link>
        </div>
      </div>
      <div className="main">
        <h3 className={styles.formsDataWrapperTitle}>Forms data submissions:</h3>
        <CardsBLock />
      </div>{' '}
    </>
  );
}
