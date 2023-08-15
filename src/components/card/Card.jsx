import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import Icon from '../icon/Icon';
import PopUp from 'components/modal/PopUp';
import AddCardForm from 'components/addCardForm/AddCardForm';
import { deleteTaskById } from 'redux/workplace/workplace-operation';

const Card = ({
  _id: id,
  title,
  description,
  labelColor: priority,
  deadLine,
  index,
}) => {
  const [currentPriority, setCurrentPriority] = useState(priority);
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPriority(priority);
  }, [priority]);
  const date = new Date(deadLine);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const today = new Date();
  const isTodayDeadline = date.toDateString() === today.toDateString();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {provided => (
        <li
          className={`cardWrapper theme-${currentTheme}  priorityClass-${currentPriority}`}
          priority={priority}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <h2 className={`cardTitle theme-${currentTheme}`}>{title}</h2>
            <p className={`cardDescriptionWrapper theme-${currentTheme}`}>
              <EllipsisText
                className={`cardDescription theme-${currentTheme}`}
                text={description}
                length={100}
              />
            </p>
            <hr className={`cardLine theme-${currentTheme}`} />
            <div className={`topWrapper theme-${currentTheme}`}>
              <div className={`cardPriority theme-${currentTheme}`}>
                <div>
                  <h3 className={`cardSubtitle theme-${currentTheme}`}>
                    Priority
                  </h3>
                  <p className={`cardSubtextPrimary theme-${currentTheme}`}>
                    <span
                      className={`cardBellPrimary theme-${currentTheme} priorityClass-${currentPriority}`}
                      priority={priority}
                    />
                    {priority}
                  </p>
                </div>
                <div>
                  <h3 className={`cardSubtitle theme-${currentTheme}`}>
                    Deadline
                  </h3>
                  <p className={`cardSubtextDeadline theme-${currentTheme}`}>
                    {`${day}/${month}/${year}`}
                  </p>
                </div>
              </div>
              <div className={`IconWrapper theme-${currentTheme}`}>
                {isTodayDeadline && (
                  <span
                    className={`cardBellIcon theme-${currentTheme}`}
                    aria-label="High priority"
                  >
                    <Icon id={'bell'} width={16} height={16} />
                  </span>
                )}

                <PopUp
                  data={
                    <div className={`cardIcon theme-${currentTheme}`}>
                      <Icon id={'pencil'} width={16} height={16} />
                    </div>
                  }
                  ariaLabel={'Edit task'}
                >
                  <AddCardForm
                    taskId={id}
                    data={{
                      title,
                      description,
                      labelColor: priority,
                      deadLine,
                    }}
                  />
                </PopUp>

                <button
                  type="button"
                  onClick={() => dispatch(deleteTaskById(id))}
                  className={`cardIcon theme-${currentTheme}`}
                  aria-label="Delete task"
                >
                  <Icon
                    className={`cardIcon theme-${currentTheme}`}
                    id={'trash'}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Card;
