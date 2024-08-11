import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './UncontrolledForm.module.scss';
import homeBtnStyles from '../HomeButton/HomeButton.module.scss';
import { FormEventHandler, useRef, useState } from 'react';
import { schema } from '../../validations/formValidation';
import { ValidationError } from 'yup';
import { FormFields, IFormData } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const errorsInitialValue = {
  name: '',
  age: '',
  email: '',
  password: '',
  passwordConfirm: '',
  file: '',
  gender: '',
  country: '',
  acceptTerms: '',
};

export default function UncontrolledForm() {
  const [errors, setErrors] = useState<Record<FormFields, string>>({ ...errorsInitialValue });
  const [, setIsFormValid] = useState<boolean>(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const formData: IFormData = {
      name: form.get('name'),
      age: form.get('age') ? Number(form.get('age')) : null,
      email: form.get('email'),
      password: form.get('password'),
      passwordConfirm: form.get('passwordConfirm'),
      file: form.get('file'),
      gender: form.get('gender'),
      country: form.get('country'),
      acceptTerms: form.get('acceptTerms'),
    };

    validateForm(formData);
  };

  const validateForm = async (formData: IFormData) => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setIsFormValid(true);
      setErrors({ ...errorsInitialValue });
      navigate('/');
    } catch (err) {
      const validationErrors: Record<keyof typeof formData, string> = {
        ...errorsInitialValue,
      };

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          const errorPath = (error as { path: FormFields }).path;

          if (!validationErrors[errorPath]) {
            validationErrors[errorPath] = error.message;
          }
        });
      }

      setErrors(validationErrors);
      setIsFormValid(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Personal info</h2>
      <Input name="name" id="name" label="Name" ref={nameRef} errors={errors} />
      <Input name="age" id="age" label="Age" type="number" ref={ageRef} errors={errors} />
      <Input name="email" id="email" label="Email" type="email" ref={emailRef} errors={errors} />
      <Input name="password" id="password" label="Password" type="password" ref={passwordRef} errors={errors} />
      <Input
        name="passwordConfirm"
        id="passwordConfirm"
        label="Confirm password"
        type="password"
        ref={passwordConfirmRef}
        errors={errors}
      />
      <Select
        name="gender"
        id="gender"
        defaultValue="male"
        label="Gender"
        options={['male', 'female', 'other']}
        ref={genderRef}
      />
      <Input name="file" id="file" label="Upload a picture (png/jpeg): " type="file" ref={fileRef} errors={errors} />
      <Select
        name="country"
        id="country"
        defaultValue="Belarus"
        label="Country"
        options={['Belarus', 'Germany']}
        ref={countryRef}
      />
      <Input
        name="acceptTerms"
        id="acceptTerms"
        label="Accept Terms and Conditions: "
        type="checkbox"
        ref={acceptTermsRef}
        errors={errors}
      />

      <button className={homeBtnStyles.btn} type="submit">
        Submit
      </button>
    </form>
  );
}
