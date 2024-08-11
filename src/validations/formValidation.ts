import { mixed, number, object, ref, string } from 'yup';

interface IFile {
  type: string;
  path: string;
  size: number;
}

const schema = object({
  name: string()
    .required('This field is required')
    .matches(/^[A-ZА-ЯЁ]/, 'Must start with a capital letter'),
  age: number().required('This field is required').positive('Must be a positive number').integer().max(120).min(1),
  email: string().required('This field is required').email('Invalid email'),
  password: string()
    .required('This field is required')
    .min(4, 'Too short')
    .matches(/[!@#$%^&*{}(),.:<>|]/, 'Must contain at least one speacial symbol')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter'),
  passwordConfirm: string()
    .required('This field is required')
    .oneOf([ref('password')], 'Password does not match'),
  file: mixed()
    .test('file presence', 'This field is required', (value) => (value as IFile).size !== 0)
    .test('file type', 'Invalid file format', (value) => ['image/jpeg', 'image/png'].includes((value as IFile).type))
    .test('file size', 'File size should be less than 10Mb', (value) => (value as IFile).size <= 10 * 1024 * 1024),
  gender: string().required('This field is required').oneOf(['male', 'female', 'other']),
  country: string().required('This field is required'),
  acceptTerms: string().required('This field is required'),
});

export { schema };
