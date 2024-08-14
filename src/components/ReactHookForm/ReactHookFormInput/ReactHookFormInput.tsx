import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import styles from '../ReactHookForm.module.scss';
import { ReactHookForm } from '../ReactHookForm';
import { FormFields } from '../../../types/types';
import PasswordStrength from '../../PasswordLength/PasswordStrength';
import { useAppSelector } from '../../../hooks/hooks';

interface HookFormInputProps {
  label: string;
  type?: string;
  name: FormFields;
  register: UseFormRegister<ReactHookForm>;
  errors: FieldErrors<ReactHookForm>;
  watch?: UseFormWatch<ReactHookForm>;
}

export default function ReactHookFormInput({
  label,
  type = 'text',
  name,
  register,
  errors,
  watch,
}: HookFormInputProps) {
  const countries = useAppSelector((state) => state.countries);

  return (
    <label className={type === 'checkbox' ? styles.checkBoxLabel : styles.label}>
      {label}
      <input
        className={type === 'checkbox' ? '' : styles.input}
        type={type}
        {...register(name)}
        list={name === 'country' ? 'countriesList2' : ''}
      />
      {name === 'password' && watch && <PasswordStrength passwordValue={watch('password') ?? ''} />}
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
      {name === 'country' && (
        <datalist id="countriesList2">
          {countries.map((country) => (
            <option key={country} value={country}></option>
          ))}
        </datalist>
      )}
    </label>
  );
}
