import React, { useState, useEffect, useRef } from 'react';
import PopUp from 'components/modal/PopUp';
import { EditProfileForm } from 'components/EditProfileForm/EditProfileForm';
import Icon from 'components/icon/Icon';
import './header.scss';

const Header = ({ children }) => {
  const [theme, setTheme] = useState('violet');
  const themes = ['light', 'dark', 'violet'];
  const [isMenuActive, setMenuActive] = useState(false);
  const selectSingleRef = useRef(null);
  const handleToggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };
  const handleOptionClick = label => {
    setTheme(label);
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
    <div className={`header theme-${theme}`}>
      <form>
        <div
          className={`select ${isMenuActive}`}
          onClick={handleToggleMenu}
          ref={selectSingleRef}
        >
          <div className={`selectTitle theme-${theme}`} data-default="Theme">
            Theme
            <Icon
              className={`selectIcon theme-${theme}`}
              id={'chevron-down'}
              width={16}
              height={16}
            />
          </div>
          <div className={`selectContent theme-${theme}`}>
            {themes.map((themeOption, index) => (
              <div key={index} className="selectContainer">
                <input
                  id={`singleSelect${index}`}
                  className={`selectInput theme-${theme}`}
                  type="radio"
                  name="singleSelect"
                  value={themeOption}
                  checked={theme === themeOption}
                  onChange={() => handleOptionClick(themeOption)}
                />
                <label
                  htmlFor={`singleSelect${index}`}
                  className={`selectLabel theme-${theme}`}
                >
                  {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
      {children}
      <PopUp>
        {/* <p>Header popup</p> */}
        <EditProfileForm />
      </PopUp>
    </div>
  );
};
export default Header;
