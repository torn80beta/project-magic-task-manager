import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { selectColumns } from 'redux/workplace/workplace-slice';
import { deleteColumnById } from 'redux/workplace/workplace-operation';
import { filterState } from 'redux/filter/filterSlice';
import PopUp from 'components/modal/PopUp';
import ColumnForm from 'components/columnForm/ColumnForm';
import AddCardForm from 'components/addCardForm/AddCardForm';
import Card from 'components/card/Card';
import Icon from 'components/icon/Icon';

import './Columns.scss';

const Columns = ({ _id: id, name }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);
  const columnsList = useSelector(selectColumns);
  const filter = useSelector(filterState);

  const cards =
    columnsList[columnsList.findIndex(item => item._id === id)].tasks;

  const handleDeleteButton = columnId => {
    if (cards.length !== 0) {
      toast.error('The column must be empty');
      return;
    }
    dispatch(deleteColumnById(columnId));
  };

  const getFilteredCards = () => {
    if (filter === 'all') {
      return cards;
    }
    return cards.filter(({ labelColor }) => labelColor.includes(filter));
  };
  const filteredCards = getFilteredCards();

  return (
    <li className={`column theme-${currentTheme}`}>
      <div className={`column_header theme-${currentTheme}`}>
        <h2 className={`column_headerTitle theme-${currentTheme}`}>{name}</h2>

        <div className={`column_buttonWrap theme-${currentTheme}`}>
          <PopUp
            data={
              <span className={`column_buttonIcon theme-${currentTheme}`}>
                <Icon id="pencil" width="16" height="16" />
              </span>
            }
          >
            <ColumnForm title={name} id={id} />
          </PopUp>
          <button
            className={`column_buttonBox theme-${currentTheme}`}
            onClick={() => handleDeleteButton(id)}
          >
            <span className={`column_buttonIcon theme-${currentTheme}`}>
              <Icon id="trash" width="16" height="16" />
            </span>
          </button>
        </div>
      </div>
      <Droppable droppableId={id} key={id}>
        {provided => (
          <ul
            className={`cardsWrap theme-${currentTheme}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredCards.map((card, index) => (
              <Card
                {...{ ...card, taskId: card._id }}
                index={index}
                key={card._id}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <PopUp
        data={
          <span className={`column_buttonAdd theme-${currentTheme}`}>
            <span className={`column_buttonAddIcon theme-${currentTheme}`}>
              <Icon id="plus" width="14" height="14" />
            </span>
            Add another card
          </span>
        }
      >
        <AddCardForm columnId={id} />
      </PopUp>
    </li>
  );
};
export default Columns;
