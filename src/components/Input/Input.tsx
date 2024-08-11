import { forwardRef } from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import inputStyles from './Input.module.scss';
import { FormFields } from '../../types/types';
import { countriesList } from '../../utils/countriesList';

interface InputProps {
  type?: string;
  name: FormFields;
  id: string;
  label: string;
  errors: Record<FormFields, string>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', name, id, label, errors }, ref) => {
  const datalist =
    name === 'country' ? (
      <datalist id="countriesList">
        {countriesList.map((country) => (
          <option key={country} value={country}></option>
        ))}
      </datalist>
    ) : null;

  return (
    <div className={type === 'checkbox' ? styles.checkboxInputField : styles.inputField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        list={name === 'country' ? 'countriesList' : ''}
        className={styles.input}
        type={type}
        name={name}
        id={id}
        ref={ref}
      />
      {errors[name] ? <p className={inputStyles.error}>{errors[name]}</p> : null}
      {datalist}
    </div>
  );
});

export default Input;
