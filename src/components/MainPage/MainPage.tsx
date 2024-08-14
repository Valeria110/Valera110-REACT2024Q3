import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardsBLock from '../CardsBlock/CardsBLock';
import { useAppSelector } from '../../hooks/hooks';

export default function MainPage() {
  const formData = useAppSelector((state) => state.form.formData);
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
        {formData.length ? <CardsBLock /> : <p>No submitted data yet :(</p>}
      </div>{' '}
    </>
  );
}
