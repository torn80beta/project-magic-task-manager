import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { filterState, changeFilter } from 'redux/filter/filterSlice';

import './FilterPopup.scss';

const FilterPopup = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);
  const filter = useSelector(filterState);

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  useEffect(() => {
    const element = document.querySelector(`[value=${filter}]`);
    element.setAttribute('checked', true);
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
              value="all"
              name="priority"
              onChange={handleFilter}
            />
            Show all
          </label>
        </div>

        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="without"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without grey`}></span>
          <span>Without priority</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="low"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without blue`}></span>
          <span> Low</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="medium"
            name="priority"
            onChange={handleFilter}
          />
          <span className={`filterPopup_without pink`}></span>
          <span> Medium</span>
        </label>
        <label className={`filterPopup_label theme-${currentTheme}`}>
          <input
            type="radio"
            value="high"
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
