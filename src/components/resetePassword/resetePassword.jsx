import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Navigate, useSearchParams } from 'react-router-dom';

import resetePasswordShema from './resetePasswordShema';

import Icon from '../../components/icon/Icon';

import css from './resetePassword.module.scss';
import { resetPassword } from 'redux/auth/auth-operation';

const ResetePassword = () => {
  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get('verificationToken');

  console.log(verificationToken);

  const dispatch = useDispatch();
  const [finish, setFinish] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (user, { resetForm }) => {
    console.log(user, 2);
    dispatch(resetPassword({ user, verificationToken }));
    resetForm();
    setFinish(true);
  };

  return (
    <>
      {!verificationToken && verificationToken === '' && <Navigate to="/" />}
      {finish && <Navigate to="/" />}
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ password: '' }}
        validationSchema={resetePasswordShema}
      >
        <Form className={css.formContainer}>
          <div className={css.inputContainer}>
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
    </>
  );
};

export default ResetePassword;
