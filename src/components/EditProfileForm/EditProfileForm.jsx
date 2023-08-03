import { useRef, useState } from 'react';
import Icon from 'components/icon/Icon';
import css from './editProfileForm.module.scss';

export const EditProfileForm = () => {
  const hiddenFileInput = useRef(null);
  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const [file, setFile] = useState(null);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className={css.editProfileForm} autoComplete="of">
      <span className={css.formTitle}>Edit profile</span>
      <div className={css.avatar}>
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
        className={css.uploadBtn}
        type="button"
        onClick={handleUploadClick}
      >
        <Icon id="plus" width={10} height={10} />
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
        {passwordShown ? (
          <Icon id="eye" width={18} height={18} />
        ) : (
          <Icon id="eye-off" width={18} height={18} />
        )}
      </button>

      <button className={css.submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};
