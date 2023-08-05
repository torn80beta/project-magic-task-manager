// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';

import Icon from 'components/icon/Icon';
import PopUp from 'components/modal/PopUp';
import EditColumnForm from 'components/editColumnForm/EditColumnForm';
import AddCardForm from 'components/addCardForm/AddCardForm';
import Card from 'components/card/Card';

import './Columns.scss';

const description = `Conduct in-depth research and analysis on the
   project's topic, gather relevant data, and identify
   key insights to inform decision-making and project planning.`;

const cards = [
  {
    id: 1,
    title: 'Card 1 Title',
    description: description,
    priority: 'high',
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
    priority: 'low',
    deadline: '11/09/2023',
  },
  {
    id: 4,
    title: 'Card 4 Title',
    description: description,
    priority: 'low',
    deadline: '11/09/2023',
  },
  {
    id: 5,
    title: 'Card 5 Title',
    description: description,
    priority: 'low',
    deadline: '11/09/2023',
  },
];

const Columns = ({ title }) => {
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <div className={`column theme-${currentTheme}`}>
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
            <EditColumnForm title={title} />
          </PopUp>
          <span className={`column_headerIcon theme-${currentTheme}`}>
            <Icon id="trash" width="16" height="16" />
          </span>
        </div>
      </div>

      <ul className={`cardsWrap theme-${currentTheme}`}>
        {cards.map(card => (
          <Card
            title={card.title}
            description={card.description}
            priority={card.priority}
            deadline={card.deadline}
            key={card.id}
          />
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
        <AddCardForm />
      </PopUp>
    </div>
  );
};
export default Columns;
