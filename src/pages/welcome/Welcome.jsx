import React from 'react';
import { NavLink } from 'react-router-dom';
import welcomeImage from '../../images/welcome.png';
import Icon from '../../components/icon/Icon';
import css from './welcome.module.scss';

const Welcome = () => {
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
      </div>
    </div>
  );
};

export default Welcome;
