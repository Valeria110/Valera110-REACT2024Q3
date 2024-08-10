import { forwardRef } from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import inputStyles from './Input.module.scss';
import { FormFields } from '../../types/types';

interface InputProps {
  type?: string;
  name: FormFields;
  id: string;
  label: string;
  errors: Record<FormFields, string>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', name, id, label, errors }, ref) => {
  return (
    <div className={type === 'checkbox' ? styles.checkboxInputField : styles.inputField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} name={name} id={id} ref={ref} />
      {errors[name] ? <p className={inputStyles.error}>{errors[name]}</p> : null}
    </div>
  );
});

export default Input;
