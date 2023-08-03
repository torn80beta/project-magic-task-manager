import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';
import { themeState } from 'redux/theme/themeSlice';
import Icon from 'components/icon/Icon';
import css from './editProfileForm.module.scss';

export const EditProfileForm = () => {
  const hiddenFileInput = useRef(null);
  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const theme = useSelector(themeState);
  console.log(theme);

  const [file, setFile] = useState(null);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form
      className={clsx(css.editProfileForm, {
        [css.dark]: theme === 'dark',
      })}
      autoComplete="of"
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
        {file ? (
          <img className={css.newAvatar} src={file} alt="avatar" />
        ) : (
          <Icon id="avatar" width={68} height={73} />
        )}
      </div>
      <input
        onChange={handleChange}
        type="file"
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
        <input
          className={clsx(css.formInput, {
            [css.light]: theme === 'light',
            [css.violet]: theme === 'violet',
          })}
          placeholder="Change your name"
          type="text"
          name="name"
        />

        <input
          className={clsx(css.formInput, {
            [css.light]: theme === 'light',
            [css.violet]: theme === 'violet',
          })}
          placeholder="Change your email"
          type="email"
          name="email"
        />

        <input
          className={clsx(css.formInput, {
            [css.light]: theme === 'light',
            [css.violet]: theme === 'violet',
          })}
          placeholder="Change your password"
          type={passwordShown ? 'text' : 'password'}
          name="password"
        />
      </div>
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

      <button
        className={clsx(css.submitBtn, {
          [css.violet]: theme === 'violet',
        })}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
