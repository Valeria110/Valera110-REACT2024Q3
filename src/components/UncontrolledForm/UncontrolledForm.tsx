import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './UncontrolledForm.module.scss';
import homeBtnStyles from '../HomeButton/HomeButton.module.scss';
import { FormEventHandler } from 'react';
import { schema } from '../../validations/formValidation';
import { ValidationError } from 'yup';
import { FormFields, IFormData } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { clearErrors, setErrors } from '../../features/validationErrorsSlice';
import { setFormValidation } from '../../features/formSlice';
import { saveFormDataToStore } from '../../utils/utils';

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
  const dispatch = useAppDispatch();
  const isFormValid = useAppSelector((state) => state.form.isValid);
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
      dispatch(setFormValidation(true));
      dispatch(clearErrors());
      saveFormDataToStore(formData, dispatch);
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

      dispatch(setErrors(validationErrors));
      dispatch(setFormValidation(false));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Personal info</h2>
      <Input name="name" id="name" label="Name" />
      <Input name="age" id="age" label="Age" type="number" />
      <Input name="email" id="email" label="Email" type="email" />
      <Input name="password" id="password" label="Password" type="password" />
      <Input name="passwordConfirm" id="passwordConfirm" label="Confirm password" type="password" />
      <Select name="gender" id="gender" defaultValue="male" label="Gender" options={['male', 'female', 'other']} />
      <Input name="file" id="file" label="Upload a picture (png/jpeg): " type="file" />
      <Input name="country" id="country" label="Country" />
      <Input name="acceptTerms" id="acceptTerms" label="Accept Terms and Conditions: " type="checkbox" />

      <button className={homeBtnStyles.btn} type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}
