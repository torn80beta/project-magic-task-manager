import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import Icon from 'components/icon/Icon';
import EditColumnForm from 'components/editColumnForm/EditColumnForm';
import PopUp from 'components/modal/PopUp';

import './Columns.scss';
import AddCardForm from 'components/addCardForm/AddCardForm';

// import Card from 'components/card/Card';
// test
// const cards = [
//   {
//     id: 1,
//     title: 'Card 1 Title',
//     description: 'Card 1 Description',
//     priority: 'high',
//     deadline: '11/09/2023',
//   },
//   {
//     id: 2,
//     title: 'Card 2 Title',
//     description: 'Card 2 Description',
//     priority: 'low',
//     deadline: '11/09/2023',
//   },

//   {
//     id: 3,
//     title: 'Card 3 Title',
//     description: 'Card 3 Description',
//     priority: 'low',
//     deadline: '11/09/2023',
//   },
  
// ];

const Columns = ({ title }) => {
  const currentTheme = useSelector(themeState);

  return (
    <div className={`column theme-${currentTheme}`}>
      <div className={`column_header theme-${currentTheme}`}>
        <h2 className={`column_headerTitle theme-${currentTheme}`}>{title}</h2>
        <div className={`column_headerIconWrap theme-${currentTheme}`}>
          <PopUp
            data={
              <span className={`column_headerIconColor theme-${currentTheme}`}>
                <Icon id="pencil" width="16" height="16" />
              </span>
            }
          >
            <EditColumnForm title={title} />
          </PopUp>
          <span className={`column_headerIconColor theme-${currentTheme}`}>
            <Icon id="trash" width="16" height="16" />
          </span>
        </div>
      </div>

      <ul className={`cards theme-${currentTheme}`}>

           {/* {cards.map(card => (
          <Card
        
            title={card.title}
            description={card.description}
            priority={card.priority}
            deadline={card.deadline} 
             key={card.id} 
          />
        ))}  */}
        
        {/* {cards.map(card => (
          <div className="card" title={card.title} key={card.id}>
          </div>
        ))} */}
        <li className={`card theme-${currentTheme}`}>
          <p>Card1</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card2</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card3</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card4</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card5</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card1</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card2</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card3</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card1</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card2</p>
          <p>desc</p>
          <p>+</p>
        </li>
        <li className={`card theme-${currentTheme}`}>
          <p>Card3</p>
          <p>desc</p>
          <p>+</p>
        </li>


      </ul>
      <PopUp
        data={
          <span className={`column_button theme-${currentTheme}`}>
            <span className={`column_buttonIcon theme-${currentTheme}`}>
              <Icon id="plus" width="14" height="14" />
            </span>
            <span className={`column_button_text theme-${currentTheme}`}>
              Add another card
            </span>
          </span>
        }
      >
        <AddCardForm />
      </PopUp>
    </div>
  );
};
export default Columns;
