import { forwardRef } from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.scss';

interface InputProps {
  type?: string;
  name: string;
  id: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', name, id, label }, ref) => {
  return (
    <div className={type === 'checkbox' ? styles.checkboxInputField : styles.inputField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} name={name} id={id} ref={ref} />
    </div>
  );
});

export default Input;
