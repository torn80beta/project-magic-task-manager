import { useRef, useState } from 'react';
import css from './editProfileForm.module.scss';
import avatar from '../../images/user.png';

export const EditProfileForm = () => {
  const hiddenFileInput = useRef(null);
  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className={css.editProfileForm} autoComplete="of">
      <button className={css.closeButton} type="button">
        x
      </button>
      <span className={css.formTitle}>Edit profile</span>
      <img className={css.avatar} src={avatar} alt="avatar" />
      <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />

      <button
        className={css.uploadBtn}
        type="button"
        onClick={handleUploadClick}
      >
        +
      </button>

      <div className={css.inputsWrapper}>
        <input
          className={css.formInput}
          placeholder="Change your name"
          type="text"
          name="name"
        />

        <input
          className={css.formInput}
          placeholder="Change your email"
          type="email"
          name="email"
        />

        <input
          className={css.formInput}
          placeholder="Change your password"
          type={passwordShown ? 'text' : 'password'}
          name="password"
        />
      </div>
      <button className={css.showPwd} type="button" onClick={togglePassword}>
        {passwordShown ? '-' : '+'}
      </button>

      <button className={css.submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};
