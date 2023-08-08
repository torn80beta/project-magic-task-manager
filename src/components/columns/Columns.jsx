// import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';

import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { filterState } from 'redux/filter/filterSlice';

import Icon from 'components/icon/Icon';
import PopUp from 'components/modal/PopUp';
import ColumnForm from 'components/columnForm/ColumnForm';
import AddCardForm from 'components/addCardForm/AddCardForm';
import Card from 'components/card/Card';

import './Columns.scss';
import { selectColumns } from 'redux/workplace/workplace-slice';

// const description = `Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.`;

// const cards = [
//   {
//     id: 1,
//     title: 'Card 1 Title',
//     description: description,
//     priority: 'without',
//     deadline: '11/09/2023',
//   },
//   {
//     id: 2,
//     title: 'Card 2 Title',
//     description: description,
//     priority: 'low',
//     deadline: '11/09/2023',
//   },

//   {
//     id: 3,
//     title: 'Card 3 Title',
//     description: description,
//     priority: 'medium',
//     deadline: '11/09/2023',
//   },
//   {
//     id: 4,
//     title: 'Card 4 Title',
//     description: description,
//     priority: 'high',
//     deadline: '11/09/2023',
//   },
//   {
//     id: 5,
//     title: 'Card 5 Title',
//     description: description,
//     priority: 'without',
//     deadline: '11/09/2023',
//   },
// ];

const Columns = ({ _id: id, name }) => {
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);

  const columnsList = useSelector(selectColumns);
  // console.log('columnsList:', columnsList);
  const cards =
    columnsList[columnsList.findIndex(item => item._id === id)].tasks;
  // console.log('cards:', cards);

  const filter = useSelector(filterState);

  const handleDeleteButton = columnId => {
    if (cards.length !== 0) {
      console.log('The column must be empty');
      return;
    }
    console.log(`Column deleted ${columnId}`);
    // робимо DELETE запит при кліку
  };

  const getFilteredCards = () => {
    if (filter === 'all') {
      return cards;
    }
    return cards.filter(({ labelColor }) => labelColor.includes(filter));
  };
  const filteredCards = getFilteredCards();
  // console.log('filteredCards:', filteredCards);

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

      <ul className={`cardsWrap theme-${currentTheme}`}>
        {filteredCards.map(card => (
          <Card
            {...{ ...card, columnId: id, taskId: card._id }}
            key={card._id}
          />
        ))}
      </ul>
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
