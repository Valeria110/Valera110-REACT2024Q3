import styles from './ReactHookForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppSelector } from '../../hooks/hooks';
import { reactHookFormSchema } from '../../validations/formValidation';
import PasswordStrength from '../PasswordLength/PasswordStrength';

interface ReactHookForm {
  name: string;
  age: number;
  email: string;
  gender: string;
  password: string;
  passwordConfirm: string;
  file: FileList;
  country: string;
  acceptTerms: boolean;
}

export default function ReactHookForm() {
  const countries = useAppSelector((state) => state.countries);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ReactHookForm>({ mode: 'onChange', resolver: yupResolver(reactHookFormSchema) });

  const onSubmit: SubmitHandler<ReactHookForm> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Personal info</h2>
      <label className={styles.label}>
        Name
        <input className={styles.input} type="text" {...register('name')} />
        {errors['name'] && <p className={styles.error}>{errors['name'].message}</p>}
      </label>
      <label className={styles.label}>
        Age
        <input className={styles.input} type="number" {...register('age')} />
        {errors['age'] && <p className={styles.error}>{errors['age'].message}</p>}
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="text" {...register('email')} />
        {errors['email'] && <p className={styles.error}>{errors['email'].message}</p>}
      </label>

      <label className={styles.label}>
        Password
        <input className={styles.input} type="password" {...register('password')} />
        {errors['password'] && <p className={styles.error}>{errors['password'].message}</p>}
        <PasswordStrength passwordValue={watch('password') ?? ''} />
      </label>

      <label className={styles.label}>
        Confirm password
        <input className={styles.input} type="password" {...register('passwordConfirm')} />
        {errors['passwordConfirm'] && <p className={styles.error}>{errors['passwordConfirm'].message}</p>}
      </label>
      <label className={styles.label}>
        Gender
        <select className={styles.select} {...register('gender')}>
          <option className={styles.option} value="male">
            male
          </option>
          <option className={styles.option} value="female ">
            female
          </option>
          <option className={styles.option} value="other">
            other
          </option>
        </select>
        {errors['gender'] && <p className={styles.error}>{errors['gender'].message}</p>}
      </label>
      <label className={styles.label}>
        Upload a picture (png/jpeg):
        <input className={styles.input} type="file" {...register('file')} />
        {errors['file'] && <p className={styles.error}>{errors['file'].message}</p>}
      </label>
      <label className={styles.label}>
        Country
        <input className={styles.input} type="text" list="countriesList2" {...register('country')} />
        <datalist id="countriesList2">
          {countries.map((country) => (
            <option key={country} value={country}></option>
          ))}
        </datalist>
        {errors['country'] && <p className={styles.error}>{errors['country'].message}</p>}
      </label>
      <label className={styles.checkBoxLabel}>
        Accept Terms and Conditions:
        <input type="checkbox" {...register('acceptTerms')} />
        {errors['acceptTerms'] && <p className={styles.error}>{errors['acceptTerms'].message}</p>}
      </label>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
