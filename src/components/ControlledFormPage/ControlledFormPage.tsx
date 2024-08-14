import styles from '../UncontrolledFormPage/UncontrolledFormPage.module.scss';
import HomeButton from '../HomeButton/HomeButton';
import ReactHookForm from '../ReactHookForm/ReactHookForm';

export default function UncontrolledFormPage() {
  return (
    <>
      <header className={styles.header}>
        <HomeButton />
      </header>
      <main className={styles.main}>
        <ReactHookForm />
      </main>
    </>
  );
}
