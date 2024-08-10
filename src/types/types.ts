type FormFields =
  | 'name'
  | 'age'
  | 'email'
  | 'password'
  | 'passwordConfirm'
  | 'file'
  | 'gender'
  | 'country'
  | 'acceptTerms';

type FormErrors = Record<FormFields, string>;

export type { FormFields, FormErrors };
