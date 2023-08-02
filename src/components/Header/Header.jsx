import './header.scss';
import React, { useState, useEffect, useRef } from 'react';
import PopUp from 'components/modal/PopUp';
const Header = ({ children }) => {
  const [theme, setTheme] = useState('violet');
  const themes = ['light', 'dark', 'violet'];
  const [isMenuActive, setMenuActive] = useState(false);
  const selectSingleRef = useRef(null);
  const handleToggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };
  useEffect(() => {
    if (selectSingleRef.current) {
      selectSingleRef.current.setAttribute(
        'data-state',
        isMenuActive ? 'active' : ''
      );
    }
  }, [isMenuActive]);
  const handleOptionClick = label => {
    setTheme(label);
    setMenuActive(false);
  };
  return (
    <div className={`header theme-${theme}`}>
      <header className="header">
        <form>
          <div
            className={`select ${isMenuActive}`}
            onClick={handleToggleMenu}
            ref={selectSingleRef}
          >
            <div className="selectTitle" data-default="Theme">
              Theme
            </div>
            <div className="selectContent">
              {themes.map((themeOption, index) => (
                <div key={index} className="selectContainer">
                  <input
                    id={`singleSelect${index}`}
                    className="selectInput"
                    type="radio"
                    name="singleSelect"
                    value={themeOption}
                    checked={theme === themeOption}
                    onChange={() => handleOptionClick(themeOption)}
                  />{' '}
                  <label
                    htmlFor={`singleSelect${index}`}
                    className="selectLabel"
                  >
                    {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </header>
      {children}
      Header
      <PopUp>
        <p>Header popup</p>
      </PopUp>
    </div>
  );
};
export default Header;
