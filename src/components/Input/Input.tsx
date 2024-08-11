import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import inputStyles from './Input.module.scss';
import { FormFields } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { clearErrors } from '../../features/validationErrorsSlice';
import { setFormValidation } from '../../features/formSlice';
import { useEffect } from 'react';

interface InputProps {
  type?: string;
  name: FormFields;
  id: string;
  label: string;
}

export default function Input({ type = 'text', name, id, label }: InputProps) {
  const countries = useAppSelector((state) => state.countries);
  const errors = useAppSelector((state) => state.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFormValidation(true));
    dispatch(clearErrors());
  }, [dispatch]);

  const datalist =
    name === 'country' ? (
      <datalist id="countriesList">
        {countries.map((country) => (
          <option key={country} value={country}></option>
        ))}
      </datalist>
    ) : null;

  const handleChange = () => {
    dispatch(clearErrors());
    dispatch(setFormValidation(true));
  };

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
        onChange={handleChange}
      />
      {errors[name] ? <p className={inputStyles.error}>{errors[name]}</p> : null}
      {datalist}
    </div>
  );
}
