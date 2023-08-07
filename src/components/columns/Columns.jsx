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

const description = `Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.`;

const cards = [
  {
    id: 1,
    title: 'The Watch Spot Design',
    description: description,
    priority: 'without',
    deadline: '11/09/2023',
  },
  {
    id: 2,
    title: 'Card 2 Title',
    description: description,
    priority: 'low',
    deadline: '11/09/2023',
  },

  {
    id: 3,
    title: 'Card 3 Title',
    description: description,
    priority: 'medium',
    deadline: '11/09/2023',
  },
  {
    id: 4,
    title: 'Card 4 Title',
    description: description,
    priority: 'high',
    deadline: '11/09/2023',
  },
  {
    id: 5,
    title: 'Card 5 Title',
    description: description,
    priority: 'without',
    deadline: '11/09/2023',
  },
];

const Columns = ({ id, title }) => {
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);
  const filter = useSelector(filterState);
  const getFilteredCards = () => {
    if (filter === 'all') {
      return cards;
    }
    return cards.filter(({ priority }) => priority.includes(filter));
  };
  const filteredCards = getFilteredCards();

  return (
    <li className={`column theme-${currentTheme}`}>
      <div className={`column_header theme-${currentTheme}`}>
        <h2 className={`column_headerTitle theme-${currentTheme}`}>{title}</h2>
        <div className={`column_headerIconWrap theme-${currentTheme}`}>
          <PopUp
            data={
              <span className={`column_headerIcon theme-${currentTheme}`}>
                <Icon id="pencil" width="16" height="16" />
              </span>
            }
          >
            <ColumnForm title={title} id={id} />
          </PopUp>
          <span className={`column_headerIcon theme-${currentTheme}`}>
            <Icon id="trash" width="16" height="16" />
          </span>
        </div>
      </div>

      <ul className={`cardsWrap theme-${currentTheme}`}>
        {filteredCards.map(card => (
          <Card {...{ ...card, columnId: id }} key={card.id} />
        ))}
      </ul>
      <PopUp
        data={
          <span className={`column_button theme-${currentTheme}`}>
            <span className={`column_buttonIcon theme-${currentTheme}`}>
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
