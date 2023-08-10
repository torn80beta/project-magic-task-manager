import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { NavLink } from 'react-router-dom';
import welcomeImage from '../../images/welcome.png';
import Icon from '../../components/icon/Icon';
import css from './welcome.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Google } from 'redux/auth/auth-operation';
import GoogleButton from 'react-google-button';

const Welcome = () => {
  const distpatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      const { email, name, sub, picture } = userInfo;

      distpatch(Google({ email, name, sub, picture }));
    },
  });

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
        <GoogleButton onClick={() => googleLogin()}>
          Sign in with Google 🚀
        </GoogleButton>
      </div>
    </div>
  );
};

export default Welcome;
