import * as Yup from 'yup';

const resetePasswordShema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,
      'Invalid password format'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .required('Password is required'),
});

export default resetePasswordShema;
