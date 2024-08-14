import { boolean, mixed, number, object, ref, string } from 'yup';
import { IFile } from '../types/types';
import { oneLowercaseLetter, oneNumber, oneSpecialChar, oneUppercaseLetter } from '../utils/regex';

const schema = object({
  name: string()
    .required('This field is required')
    .matches(/^[A-ZА-ЯЁ]/, 'Must start with a capital letter'),
  age: number().required('This field is required').positive('Must be a positive number').integer().lessThan(120),
  email: string().required('This field is required').email('Invalid email'),
  password: string()
    .required('This field is required')
    .min(4, 'Too short')
    .matches(oneSpecialChar, 'Must contain at least one speacial character')
    .matches(oneNumber, 'Must contain at least one number')
    .matches(oneUppercaseLetter, 'Must contain at least one uppercased letter')
    .matches(oneLowercaseLetter, 'Must contain at least one lowercased letter'),
  passwordConfirm: string()
    .required('This field is required')
    .oneOf([ref('password')], 'Password does not match'),
  file: mixed<IFile>()
    .test('file presence', 'This field is required', (value) => (value as IFile).size !== 0)
    .test('file type', 'Invalid file format', (value) => ['image/jpeg', 'image/png'].includes((value as IFile).type))
    .test('file size', 'File size should be less than 10Mb', (value) => (value as IFile).size <= 10 * 1024 * 1024)
    .required('This field is required'),
  gender: string().required('This field is required').oneOf(['male', 'female', 'other']),
  country: string().required('This field is required'),
  acceptTerms: string().required('This field is required'),
});

// const schema2 = object({
//   name: string()
//     .required('This field is required')
//     .matches(/^[A-ZА-ЯЁ]/, 'Must start with a capital letter'),
//   age: number().required('This field is required').positive('Must be a positive number').integer().lessThan(120),
//   email: string().required('This field is required').email('Invalid email'),
//   password: string()
//     .required('This field is required')
//     .min(4, 'Too short')
//     .matches(oneSpecialChar, 'Must contain at least one speacial character')
//     .matches(oneNumber, 'Must contain at least one number')
//     .matches(oneUppercaseLetter, 'Must contain at least one uppercased letter')
//     .matches(oneLowercaseLetter, 'Must contain at least one lowercased letter'),
//   passwordConfirm: string()
//     .required('This field is required')
//     .oneOf([ref('password')], 'Password does not match'),
//   file: mixed<FileList>()
//     .required('This field is required')
//     .test('file presence', 'This field is required', (value: FileList) => {
//       return value.length ? true : false;
//     })
//     .test('file type', 'Invalid file format', (value: FileList) => {
//       if (!value.length) {
//         return false;
//       }
//       return ['image/jpeg', 'image/png'].includes(value[0].type);
//     })
//     .test('file size', 'File size should be less than 10Mb', (value) => {
//       if (!value.length) {
//         return false;
//       }
//       return value[0].size <= 10 * 1024 * 1024;
//     }),
//   gender: string().required('This field is required').oneOf(['male', 'female', 'other']),
//   country: string().required('This field is required'),
//   acceptTerms: boolean()
//     .required('You must accept terms and conditions')
//     .oneOf([true], 'You must accept terms and conditions'),
// });

const reactHookFormSchema = object({
  name: string()
    .required('This field is required')
    .matches(/^[A-ZА-ЯЁ]/, 'Must start with a capital letter'),
  age: number().required('This field is required').positive('Must be a positive number').integer().lessThan(120),
  email: string().required('This field is required').email('Invalid email'),
  gender: string().required(),
  password: string()
    .required('This field is required')
    .min(4, 'Too short')
    .matches(oneSpecialChar, 'Must contain at least one speacial character')
    .matches(oneNumber, 'Must contain at least one number')
    .matches(oneUppercaseLetter, 'Must contain at least one uppercased letter')
    .matches(oneLowercaseLetter, 'Must contain at least one lowercased letter'),
  passwordConfirm: string()
    .required('This field is required')
    .oneOf([ref('password')], 'Password does not match'),
  file: mixed<FileList>()
    .required('This field is required')
    .test('file presence', 'This field is required', (value: FileList) => {
      return value.length ? true : false;
    })
    .test('file type', 'Invalid file format', (value: FileList) => {
      if (!value.length) {
        return false;
      }
      return ['image/jpeg', 'image/png'].includes(value[0].type);
    })
    .test('file size', 'File size should be less than 10Mb', (value) => {
      if (!value.length) {
        return false;
      }
      return value[0].size <= 10 * 1024 * 1024;
    }),
  country: string().required('This field is required'),
  acceptTerms: boolean()
    .required('You must accept terms and conditions')
    .oneOf([true], 'You must accept terms and conditions'),
});

export { schema, reactHookFormSchema };
