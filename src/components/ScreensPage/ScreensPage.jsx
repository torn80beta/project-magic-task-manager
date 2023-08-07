import './screensPage.scss';
import PopUp from 'components/modal/PopUp';
// import { useState } from 'react';
// import Columns from '../columns/Columns';
import Icon from '../icon/Icon';
import FilterPopup from 'components/filterPopup/FilterPopup';
// import { themeState } from 'redux/theme/themeSlice';
import {
  selectCurrentTheme,
  selectCurrentUserBoards,
} from 'redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import ColumnForm from 'components/columnForm/ColumnForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getBoardById } from 'redux/workplace/workplace-operation';

//temporary
// const columnsArray = [
//   { title: 'To Do', id: 1 },
//   { title: 'In progress', id: 2 },
//   { title: 'Done', id: 3 },
//   { title: 'Done', id: 4 },
//   { title: 'Done', id: 5 },
//   { title: 'Done', id: 6 },
//   { title: 'Done', id: 7 },
//   { title: 'Done', id: 8 },
// ];

const ScreensPage = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const { boardName } = useParams();
  const selectedBoards = useSelector(selectCurrentUserBoards);
  const [boardsList] = useState(selectedBoards);
  const [currentBoard, setCurrentBoard] = useState(null);
  // const dispatch = useDispatch(boardsList);

  useEffect(() => {
    const foundBoard =
      boardsList && boardsList.find(item => item._id === boardName);
    // console.log(foundBoard);
    foundBoard ? setCurrentBoard(foundBoard) : setCurrentBoard(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardsList, boardName]);

  useEffect(() => {
    // setBoardList(selectedBoards);
  }, [currentBoard]);

  return (
    <div className={`theme-${currentTheme} screenPage`}>
      <div className={`screenPage_header theme-${currentTheme}`}>
        <h1 className={`screenPage_title theme-${currentTheme}`}>
          {/* {currentBoardTitle} */}
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
          {/* {columnsArray.map(item => (
            <Columns {...item} key={item.id} />
          ))} */}
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
