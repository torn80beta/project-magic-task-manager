import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { clsx } from 'clsx';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import {
  selectUserAvatar,
  selectUserName,
  selectUserEmail,
} from 'redux/auth/auth-slice';
import Icon from 'components/icon/Icon';
import css from './editProfileForm.module.scss';
import { editUserData } from 'redux/auth/auth-operation';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name must be at most 15 characters')
    .trim('No leading or trailing spaces'),
  // .matches(/^\S*$/, 'Spaces are not allowed'),
  email: Yup.string()
    .required('Email is required')
    .trim('No leading or trailing spaces')
    .matches(
      /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
      'Invalid email format'
    ),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,
      'Invalid password format'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .trim('No leading or trailing spaces'),
});

export const EditProfileForm = props => {
  const { closeModal } = props;
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const theme = useSelector(selectCurrentTheme);
  const userAvatar = useSelector(selectUserAvatar);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = editedContact => {
    const formData = new FormData();
    formData.append('name', editedContact.name);
    formData.append('email', editedContact.email);
    if (editedContact.password.trim() !== '') {
      formData.append('password', editedContact.password);
    }
    if (file) {
      formData.append('avatar', file);
    }

    dispatch(editUserData(formData));
    closeModal();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: userName, email: userEmail, password: '' }}
      validationSchema={schema}
    >
      <Form
        className={clsx(css.editProfileForm, {
          [css.dark]: theme === 'dark',
        })}
        autoComplete="off"
      >
        <span
          className={clsx(css.formTitle, {
            [css.dark]: theme === 'dark',
          })}
        >
          Edit profile
        </span>
        <div
          className={clsx(css.avatar, {
            [css.light]: theme === 'light',
            [css.violet]: theme === 'violet',
          })}
        >
          {fileURL ? (
            <img className={css.newAvatar} src={fileURL} alt="avatar" />
          ) : userAvatar ? (
            <img src={userAvatar} alt="User Avatar" />
          ) : (
            <Icon id="avatar" width={68} height={73} />
          )}
        </div>
        <input
          onChange={handleChange}
          type="file"
          name="avatar"
          accept="image/jpeg, image/png, image/gif"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
        />

        <button
          className={clsx(css.uploadBtn, {
            [css.violet]: theme === 'violet',
          })}
          type="button"
          onClick={handleUploadClick}
        >
          <Icon id="plus" width={10} height={10} />
        </button>

        <div className={css.inputsWrapper}>
          <Field
            className={clsx(css.formInput, {
              [css.light]: theme === 'light',
              [css.violet]: theme === 'violet',
            })}
            placeholder="Change your name"
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="div" />

          <Field
            className={clsx(css.formInput, {
              [css.light]: theme === 'light',
              [css.violet]: theme === 'violet',
            })}
            placeholder="Change your email"
            type="email"
            name="email"
          />
          <ErrorMessage className={css.error} name="email" component="div" />

          <div className={css.btnWrapper}>
            <Field
              className={clsx(css.formInput, {
                [css.light]: theme === 'light',
                [css.violet]: theme === 'violet',
              })}
              placeholder="Change your password"
              type={passwordShown ? 'text' : 'password'}
              name="password"
            />
            <button
              className={clsx(css.showPwd, {
                [css.light]: theme === 'light',
                [css.violet]: theme === 'violet',
              })}
              type="button"
              onClick={togglePassword}
            >
              {passwordShown ? (
                <Icon id="eye" width={18} height={18} />
              ) : (
                <Icon id="eye-off" width={18} height={18} />
              )}
            </button>
          </div>
          <ErrorMessage className={css.error} name="password" component="div" />
        </div>

        <button
          className={clsx(css.submitBtn, {
            [css.violet]: theme === 'violet',
          })}
          type="submit"
          aria-label="Send"
        >
          Send
        </button>
      </Form>
    </Formik>
  );
};
