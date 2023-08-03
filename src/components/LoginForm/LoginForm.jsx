import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import LoginSchema from './LoginSchema';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import css from './loginForm.module.scss';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={LoginSchema}
        >
          <div className={css.formContainer}>
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
              <ErrorMessage
                className={css.errmes}
                name="email"
                component="div"
              />
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
            <button className={css.registerButton} type="submit">
              Register Now
            </button>
          </div>
        </Formik>
      </form>
    </>
  );
};

export default RegisterForm;
