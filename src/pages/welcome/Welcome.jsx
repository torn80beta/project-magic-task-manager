import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import welcomeImage from '../../images/welcome.png';
import Icon from '../../components/icon/Icon';
import css from './welcome.module.scss';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import GoogleButton from 'react-google-button';
import { setToken } from 'redux/auth/auth-slice';
import { getCurrentUser } from 'redux/auth/auth-operation';

const Welcome = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  useEffect(() => {
    if (!accessToken || accessToken === '') {
      return;
    }
    dispatch(setToken({ token: accessToken }));
    dispatch(getCurrentUser());
  }, [accessToken, dispatch, searchParams]);

  return (
    <div className={css.welcomeBackground}>
      <div className={css.welcomeContent}>
        <img className={css.welcomeImage} src={welcomeImage} alt="boy" />
        <div className={css.welcomeLogoContainer}>
          <span className={css.logoIconContainer}>
            <span className={css.logoIcon}>
              <Icon className={css.a} id="logo" width="18" height="24"></Icon>
            </span>
          </span>
          <h1 className={css.logoTitle}>Task Pro</h1>
        </div>
        <p className={css.welcomeDescription}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <NavLink className={css.registrationLink} to="/auth/register">
          Registration
        </NavLink>
        <NavLink className={css.logInLink} to="/auth/login">
          Log In
        </NavLink>
        <GoogleButton
          onClick={() =>
            (window.location.href =
              'https://goit-final-project.onrender.com/api/users/google')
          }
        />
      </div>
    </div>
  );
};

export default Welcome;
