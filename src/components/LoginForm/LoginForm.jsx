import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { toast } from 'react-toastify';
import LoginSchema from './LoginSchema';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import css from './loginForm.module.scss';
import { loginUser } from 'redux/auth/auth-operation';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (user, { resetForm }) => {
    // dispatch(loginUser(user));
    // resetForm();

    try {
      const response = await dispatch(loginUser(user));
      const data = response.payload;

      if (data && data.token) {
        resetForm();
      } else {
        toast.error('Incorrect login or password provided');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formNav}>
          <Link className={css.register} to="register" underline="none">
            Registration
          </Link>
          <Link className={css.login} to="login" underline="none">
            Log In
          </Link>
        </div>
        <div className={css.inputContainer}>
          <Field name="email" type="email" placeholder="Enter your email" />
          <ErrorMessage className={css.errmes} name="email" component="div" />
          <div className={css.password}>
            <Field
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm a password"
            />
            <ErrorMessage
              className={css.errmes}
              name="password"
              component="div"
            />
            <span className={css.passwordEye} onClick={toggleShowPassword}>
              {showPassword ? (
                <Icon id="eye-off" width="18" height="18"></Icon>
              ) : (
                <Icon id="eye" width="18" height="18"></Icon>
              )}
            </span>
          </div>
        </div>
        <button className={css.logInButton} type="submit">
          Log In Now
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
