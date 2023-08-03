import { useEffect, useState } from 'react';
import './FilterPopup.scss';

const themes = ['light', 'dark', 'violet'];
const FilterPopup = () => {
  const currentTheme = themes[1];
  const [filter, setFilter] = useState('empty');
  const handleFilter = e => {
    e.target.value === 'without'
      ? setFilter('empty')
      : setFilter(e.target.value);
  };
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div className={`theme-${currentTheme} filterPopup`}>
      <h2 className={`filterPopup_header theme-${currentTheme}`}>Filters</h2>
      <form className={`filterPopup_radioButtons theme-${currentTheme}`}>
        <div className={`filterPopup_lineDiv theme-${currentTheme}`}>
          <h3 className={`filterPopup_title theme-${currentTheme}`}>
            Label color
          </h3>
          <label className={`filterPopup_showAllBtn theme-${currentTheme}`}>
            <input
              className={`filterPopup_showAllBtnInput`}
              type="radio"
              value="without"
              name="priority"
              onChange={handleFilter}
            />
            Show all
          </label>
        </div>

        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="empty"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without grey`}></span>
          <span>Without priority</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="Low"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without blue`}></span>
          <span> Low</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="Medium"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without pink`}></span>
          <span> Medium</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="High"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without green`}></span>
          <span>High</span>
        </label>
      </form>
    </div>
  );
};
export default FilterPopup;
