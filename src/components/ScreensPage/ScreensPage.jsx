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
import { useEffect, useState } from 'react';
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
const boardArray = [
  { title: 'To Do List', id: '1hk677' },
  { title: 'Home', id: '289kl0' },
  { title: 'Family', id: '34g56' },
  { title: 'Garden tree', id: '48hjk90' },
  { title: 'Project', id: '51gjj24' },
  { title: 'English', id: '6fgh678' },
  { title: 'Shopping', id: '73bnm45' },
];

const ScreensPage = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const { boardName } = useParams();
  const [currentBoardTitle, setCurrentBoard] = useState('');
  useEffect(() => {
    const foundBoard = boardArray.find(item => item.id === boardName);
    foundBoard ? setCurrentBoard(foundBoard.title) : setCurrentBoard('');
  }, [boardName]);
  return (
    <div className={`theme-${currentTheme} screenPage`}>
      <div className={`screenPage_header theme-${currentTheme}`}>
        <h1 className={`screenPage_title theme-${currentTheme}`}>
          {currentBoardTitle}
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
        <ul className={`screenPage_columns theme-${currentTheme}`}>
          {columnsArray.map(item => (
            <Columns {...item} key={item.id} />
          ))}
        </ul>

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
