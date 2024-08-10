import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './UncontrolledForm.module.scss';
import { FormEventHandler, useRef } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget as HTMLFormElement);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Personal info</h2>
      <Input name="name" id="name" label="Name: " ref={nameRef} />
      <Input name="age" id="age" label="Age: " type="number" ref={ageRef} />
      <Input name="email" id="email" label="Email: " type="email" ref={emailRef} />
      <Input name="password" id="password" label="Password: " type="password" ref={passwordRef} />
      <Input
        name="passwordConfirm"
        id="passwordConfirm"
        label="Confirm password: "
        type="password"
        ref={passwordConfirmRef}
      />
      <Select
        name="gender"
        id="gender"
        defaultValue="male"
        label="Gender: "
        options={['male', 'female']}
        ref={genderRef}
      />
      <Input name="file" id="file" label="Upload a picture (png/jpeg): " type="file" ref={fileRef} />
      <Select
        name="country"
        id="country"
        defaultValue="Belarus"
        label="Country: "
        options={['Belarus', 'Germany']}
        ref={countryRef}
      />
      <Input
        name="acceptTerms"
        id="acceptTerms"
        label="Accept Terms and Conditions: "
        type="checkbox"
        ref={acceptTermsRef}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
