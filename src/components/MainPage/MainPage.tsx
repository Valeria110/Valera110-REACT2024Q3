import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <div className={styles.formsDataWrapper}>
          <div className={styles.formDataCard}>Some Data</div>
          <div className={styles.formDataCard}>Some Data</div>
          <div className={styles.formDataCard}>Some Data</div>
        </div>
      </div>{' '}
    </>
  );
}
