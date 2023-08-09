import './screensPage.scss';
import PopUp from 'components/modal/PopUp';
import Columns from '../columns/Columns';
import Icon from '../icon/Icon';
import FilterPopup from 'components/filterPopup/FilterPopup';
import { DragDropContext } from 'react-beautiful-dnd';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useSelector, useDispatch } from 'react-redux';
import ColumnForm from 'components/columnForm/ColumnForm';
import { useParams } from 'react-router-dom';
import {
  selectColumns,
  selectCurrentBoard,
  setColumn,
} from 'redux/workplace/workplace-slice';
import {
  dragTaskById,
  getBoardById,
} from 'redux/workplace/workplace-operation';
import { useEffect } from 'react';

const ScreensPage = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const columnsArray = useSelector(selectColumns);
  const { boardName } = useParams();
  const currentBoard = useSelector(selectCurrentBoard);

  useEffect(() => {
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch]);

  const dragHandler = async res => {
    if (!res.destination) {
      return;
    }
    const sourceListIndex = columnsArray.findIndex(
      el => el._id === res.source.droppableId
    );
    const destinationListIndex = columnsArray.findIndex(
      el => el._id === res.destination.droppableId
    );

    const updatedSourceTasks = [...columnsArray[sourceListIndex].tasks];
    const updatedDestinationTasks = [
      ...columnsArray[destinationListIndex].tasks,
    ];

    const [movedTask] = updatedSourceTasks.splice(res.source.index, 1);

    if (sourceListIndex === destinationListIndex) {
      updatedSourceTasks.splice(res.destination.index, 0, movedTask);
    } else {
      updatedDestinationTasks.splice(res.destination.index, 0, movedTask);
    }

    const updatedData = [...columnsArray];
    updatedData[sourceListIndex] = {
      ...updatedData[sourceListIndex],
      tasks: updatedSourceTasks,
    };
    if (sourceListIndex !== destinationListIndex) {
      updatedData[destinationListIndex] = {
        ...updatedData[destinationListIndex],
        tasks: updatedDestinationTasks,
      };
    }

    dispatch(setColumn(updatedData));

    dispatch(
      dragTaskById({
        id: movedTask._id,
        columnId: res.destination.droppableId,
        indexTo: res.destination.index,
        indexFrom: res.source.index,
      })
    );
  };

  return (
    <div className={`theme-${currentTheme} screenPage`}>
      <div className={`screenPage_header theme-${currentTheme}`}>
        <h1 className={`screenPage_title theme-${currentTheme}`}>
          {currentBoard.name}
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
          <DragDropContext onDragEnd={dragHandler}>
            {columnsArray.map(item => (
              <Columns {...item} key={item._id} />
            ))}
          </DragDropContext>
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
