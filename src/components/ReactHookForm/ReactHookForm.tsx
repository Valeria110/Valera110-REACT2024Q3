import styles from './ReactHookForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { reactHookFormSchema } from '../../validations/formValidation';
import ReactHookFormInput from './ReactHookFormInput/ReactHookFormInput';
import ReactHookFormSelect from './ReactHookFormSelect/ReactHookFormSelect';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { saveFormDataToStore } from '../../utils/utils';

export interface ReactHookForm {
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ReactHookForm>({ mode: 'onChange', resolver: yupResolver(reactHookFormSchema) });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ReactHookForm> = (data) => {
    const formData = {
      name: data.name,
      age: data.age,
      email: data.email,
      gender: data.gender,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      file: data.file[0],
      country: data.country,
      acceptTerms: data.acceptTerms,
    };
    navigate('/');
    saveFormDataToStore(formData, dispatch);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Personal info</h2>
      <ReactHookFormInput label="Name" name="name" register={register} errors={errors} />
      <ReactHookFormInput label="Age" name="age" type="number" register={register} errors={errors} />
      <ReactHookFormInput label="Email" name="email" register={register} errors={errors} />
      <ReactHookFormInput
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
        watch={watch}
      />
      <ReactHookFormInput
        label="Confirm password"
        name="passwordConfirm"
        type="password"
        register={register}
        errors={errors}
      />
      <ReactHookFormSelect label="Gender" errors={errors} register={register} name="gender" />
      <ReactHookFormInput
        label="Upload a picture (png/jpeg):"
        name="file"
        type="file"
        register={register}
        errors={errors}
      />
      <ReactHookFormInput label="Country" name="country" register={register} errors={errors} />
      <ReactHookFormInput
        label="Accept Terms and Conditions:"
        name="acceptTerms"
        type="checkbox"
        register={register}
        errors={errors}
      />

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
