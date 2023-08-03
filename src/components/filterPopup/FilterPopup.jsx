import { useState } from 'react';
import './FilterPopup.scss';

const themes = ['light', 'dark', 'violet'];
const FilterPopup = () => {
  const currentTheme = themes[2];
  const [filter, setFilter] = useState('empty');
  const handleFilter = e => console.log(e.target.value);
  return (
    <div className={`theme-${currentTheme} filterPopup`}>
      <h2 className={`filterPopup_title theme-${currentTheme}`}>Filters</h2>
      <div>
        <h3>Label color</h3>
        <button>Show all</button>
        <form>
          <label>
            <input
              type="radio"
              value="empty"
              name="priority"
              onChange={handleFilter}
            />
            Without priority
          </label>
          <label>
            <input
              type="radio"
              value="Low"
              name="priority"
              onChange={handleFilter}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="Medium"
              name="priority"
              onChange={handleFilter}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="High"
              name="priority"
              onChange={handleFilter}
            />
            High
          </label>
        </form>
      </div>
    </div>
  );
};
export default FilterPopup;
