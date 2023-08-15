import * as Yup from 'yup';

const forgetPassShema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
      'Invalid email format'
    )
    .required('Email is required'),
});

export default forgetPassShema;
