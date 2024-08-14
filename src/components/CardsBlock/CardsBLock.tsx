import { useAppSelector } from '../../hooks/hooks';
import FormDataCard from '../FormDataCard/FormDataCard';
import styles from './CardsBlock.module.scss';

export default function CardsBLock() {
  const formSubmissionsData = useAppSelector((state) => state.form.formData);
  const reversedData = [...formSubmissionsData].reverse();

  return (
    <div className={styles.formsDataWrapper}>
      {reversedData.length ? reversedData.map((formData, i) => <FormDataCard data={formData} key={i} />) : null}
    </div>
  );
}
