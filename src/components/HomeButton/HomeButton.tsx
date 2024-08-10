import { useNavigate } from 'react-router-dom';
import styles from './HomeButton.module.scss';

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate('/')}>
      Back home
    </button>
  );
}
