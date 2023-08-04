import React, { useState, useEffect, useRef } from 'react';
import UserInfo from 'components/userInfo/UserInfo';
import './header.scss';
import Icon from 'components/icon/Icon';
import { themeState, changeTheme } from 'redux/theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from 'components/Sidebar/Sidebar';
import { selectUserName, selectUserAvatar } from 'redux/auth/auth-slice';
import PopUp from 'components/modal/PopUp';

const Header = ({ children }) => {
  const themes = ['light', 'dark', 'violet'];
  const [isMenuActive, setMenuActive] = useState(false);
  const selectSingleRef = useRef(null);
  const user = {
    name: useSelector(selectUserName),
    avatar: useSelector(selectUserAvatar),
  };
  const theme = useSelector(themeState);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };
  const handleOptionClick = label => {
    dispatch(changeTheme(label));
    setMenuActive(false);
  };

  useEffect(() => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
      if (input.value === theme) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    });
  }, [theme]);

  useEffect(() => {
    if (selectSingleRef.current) {
      selectSingleRef.current.setAttribute(
        'data-state',
        isMenuActive ? 'active' : ''
      );
    }
    const handleDocumentClick = event => {
      if (
        selectSingleRef.current &&
        !selectSingleRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };
    if (isMenuActive) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuActive]);

  return (
    <header className={`header theme-${theme}`}>
      <PopUp
        data={
          <Icon
            className={`select-icon theme-${theme}`}
            id={'show-sidebar'}
            width={24}
            height={24}
          />
        }
      >
        <Sidebar />
      </PopUp>

      <div className="header-wrapper">
        <form>
          <div
            className={`select ${isMenuActive}`}
            onClick={handleToggleMenu}
            ref={selectSingleRef}
          >
            <div className={`select-title theme-${theme}`} data-default="Theme">
              Theme
              <Icon
                className={`select-icon theme-${theme}`}
                id={'chevron-down'}
                width={16}
                height={16}
              />
            </div>
            <div className={`select-content theme-${theme}`}>
              {themes.map((themeOption, index) => (
                <div key={index} className="select-container">
                  <input
                    id={`single-select${index}`}
                    className={`select-input theme-${theme}`}
                    type="radio"
                    name="single-select"
                    value={themeOption}
                    checked={theme === themeOption}
                    onChange={() => handleOptionClick(themeOption)}
                  />
                  <label
                    htmlFor={`single-select${index}`}
                    className={`select-label theme-${theme}`}
                  >
                    {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
        {children}
        <UserInfo theme={theme} user={user} />
      </div>
    </header>
  );
};
export default Header;
