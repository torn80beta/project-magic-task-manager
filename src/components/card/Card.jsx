import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
// import { deleteTaskById } from 'redux/workplace/workplace-operation';
// import { useDispatch } from 'react-redux';


import './Card.scss';
import Icon from '../icon/Icon';
import PopUp from 'components/modal/PopUp';
import AddCardForm from 'components/addCardForm/AddCardForm';

const Card = ({
  _id: id,
  title,
  description,
  labelColor: priority,
  deadLine,
}) => {
  const [currentPriority, setCurrentPriority] = useState(priority);
  const currentTheme = useSelector(selectCurrentTheme);
  // const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPriority(priority);
  }, [priority]);
  const date = new Date(deadLine);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const convertToDateFormat = dateString => {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
  };

  const today = new Date();
  const formattedDeadline = convertToDateFormat(deadLine);
  const isToday = today.toDateString() === formattedDeadline.toDateString();

  return (
    <div
      className={`cardWrapper theme-${currentTheme}  priorityClass-${currentPriority}`}
      priority={priority}
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
              <h3 className={`cardSubtitle theme-${currentTheme}`}>Priority</h3>
              <p className={`cardSubtextPrimary theme-${currentTheme}`}>
                <span
                  className={`cardBellPrimary theme-${currentTheme} priorityClass-${currentPriority}`}
                  priority={priority}
                />
                {priority}
              </p>
            </div>
            <div>
              <h3 className={`cardSubtitle theme-${currentTheme}`}>Deadline</h3>
              <p className={`cardSubtextDeadline theme-${currentTheme}`}>
                {`${day}\\${month}\\${year}`}
              </p>
            </div>
          </div>
          <div className={`IconWrapper theme-${currentTheme}`}>
            {isToday && (
              <span className={`cardIcon theme-${currentTheme}`}>
                <Icon id={'bell'} width={16} height={16} />
              </span>
            )}
            <span className={`cardIcon theme-${currentTheme}`}>
              <Icon id={'arrow-circle-broken-right'} width={16} height={16} />
            </span>
            <PopUp
              data={
                <span className={`cardIcon theme-${currentTheme}`}>
                  <Icon id={'pencil'} width={16} height={16} />
                </span>
              }
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

            <span className={`cardIcon theme-${currentTheme}`}>
              <Icon
                className={`cardIcon theme-${currentTheme}`}
                id={'trash'}
                width={16}
                height={16}
                // onClick={() => dispatch(deleteTaskById(id))}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
