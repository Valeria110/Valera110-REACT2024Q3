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

interface IFile {
  type: string;
  path: string;
  size: number;
}

type IFormData = Record<FormFields, FormDataEntryValue | number | null>;

enum PasswordStrengthLevel {
  NoPassword = '',
  VeryWeak = 'Very weak!',
  Weak = 'Weak!',
  Good = 'Good!',
  Strong = 'Strong!',
}

export type { FormFields, FormErrors, IFile, IFormData };
export { PasswordStrengthLevel };
