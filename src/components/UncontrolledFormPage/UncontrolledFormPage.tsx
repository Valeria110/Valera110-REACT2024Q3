import styles from './UncontrolledFormPage.module.scss';
import HomeButton from '../HomeButton/HomeButton';
import UncontrolledForm from '../UncontrolledForm/UncontrolledForm';

export default function UncontrolledFormPage() {
  return (
    <>
      <header>
        <HomeButton />
      </header>
      <main className={styles.main}>
        <UncontrolledForm />
      </main>
    </>
  );
}
