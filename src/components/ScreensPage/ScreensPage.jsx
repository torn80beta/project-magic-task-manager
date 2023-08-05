import './screensPage.scss';
import PopUp from 'components/modal/PopUp';
// import { useState } from 'react';
import Columns from '../columns/Columns';
import Icon from '../icon/Icon';
import FilterPopup from 'components/filterPopup/FilterPopup';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';
import ColumnForm from 'components/columnForm/ColumnForm';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//temporary
const columnsArray = [
  { title: 'To Do', id: 1 },
  { title: 'In progress', id: 2 },
  { title: 'Done', id: 3 },
  { title: 'Done', id: 4 },
  { title: 'Done', id: 5 },
  { title: 'Done', id: 6 },
  { title: 'Done', id: 7 },
  { title: 'Done', id: 8 },
];

const ScreensPage = () => {
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);
  const { boardName } = useParams();

  useEffect(() => {}, []);
  return (
    <div className={`theme-${currentTheme} screenPage`}>
      <div className={`screenPage_header theme-${currentTheme}`}>
        <h1 className={`screenPage_title theme-${currentTheme}`}>
          {boardName.split('-').join(' ')}
        </h1>
        <PopUp
          data={
            <span className={`screenPage_filter theme-${currentTheme}`}>
              <Icon id={'filter'} width={16} height={16} />
              <span className={`screenPage_filterText theme-${currentTheme}`}>
                Filter
              </span>
            </span>
          }
        >
          <FilterPopup />
        </PopUp>
      </div>

      <div className={`screenPage_canvas theme-${currentTheme}`}>
        <div className={`screenPage_columns theme-${currentTheme}`}>
          {columnsArray.map(item => (
            <Columns title={item.title} key={item.id} />
          ))}
        </div>

        <PopUp
          data={
            <span className={`screenPage_addButton theme-${currentTheme}`}>
              <span
                className={`screenPage_addButtonPlus theme-${currentTheme}`}
              >
                <Icon id={'plus'} width={14} height={14} />
              </span>
              <span
                className={`screenPage_addButtonText theme-${currentTheme}`}
              >
                Add another column
              </span>
            </span>
          }
        >
          <ColumnForm />
        </PopUp>
      </div>
    </div>
  );
};

export default ScreensPage;
