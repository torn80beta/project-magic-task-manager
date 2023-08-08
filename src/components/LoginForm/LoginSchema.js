import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
      'Invalid email format'
    )
    .required('Email is required'),
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

export default LoginSchema;
