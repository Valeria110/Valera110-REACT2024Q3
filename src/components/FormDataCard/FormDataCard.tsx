import { IFormData } from '../../types/types';
import styles from './FormDataCard.module.scss';

export default function FormDataCard({ data }: { data: IFormData }) {
  const { name, age, gender, email, country, password, file } = data;

  return (
    <div className={styles.FormDataCard} key={data.password as string}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={file as string} alt="uploaded image" />
      </div>
      <h4 className={styles.cardTitle}>
        <p>{`${name}`}</p>
        <p>{`${age} y.o. (${gender})`}</p>
      </h4>
      <p className={styles.row}>
        <span className={styles.label}>Email: </span>
        <span className={styles.rowInfo}>{`${email}`}</span>
      </p>
      <p className={styles.row}>
        <span className={styles.label}>Country: </span>
        <span className={styles.rowInfo}>{`${country}`}</span>
      </p>
      <p className={styles.row}>
        <span className={styles.label}>Password: </span>
        <span className={styles.rowInfo}>{`${password}`}</span>
      </p>
    </div>
  );
}
