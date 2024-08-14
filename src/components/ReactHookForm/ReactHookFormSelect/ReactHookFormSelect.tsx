import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../types/types';
import styles from '../ReactHookForm.module.scss';
import { ReactHookForm } from '../ReactHookForm';

interface HookFormSelectProps {
  label: string;
  name: FormFields;
  register: UseFormRegister<ReactHookForm>;
  errors: FieldErrors<ReactHookForm>;
}

export default function ReactHookFormSelect({ label, name, register, errors }: HookFormSelectProps) {
  const gendersArr = ['male', 'female', 'other'];
  return (
    <label className={styles.label}>
      {label}
      <select className={styles.select} {...register(name)}>
        {gendersArr.map((gender) => (
          <option className={styles.option} key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
    </label>
  );
}
