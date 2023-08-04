import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { themeState } from 'redux/theme/themeSlice';
import { useEffect } from 'react';



import './Card.scss';
import Icon from '../icon/Icon';
// import EditCard from 'components'

const Card = ({ title, description, priority, deadline }) => {

const [currentPriority, setCurrentPriority] = useState(priority);
const currentTheme = useSelector(themeState);

  useEffect(() => {
  
    setCurrentPriority(priority);
  }, [priority]);



  function formatDate(date) {
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  }


const today = new Date();
const formattedDate = formatDate(today);
const [ setShowModal] = useState(false);

const onOpen = () => {
  setShowModal(true);
};
// const onClose = () => {
//   setShowModal(false);
// };



  return (
    <div className={`cardWrapper theme-${currentTheme}  priorityClass-${currentPriority}` } priority={priority}>
      <div>
        <h2 className={`cardTitle theme-${currentTheme}`}>{title}</h2>
        <p className={`cardDescription theme-${currentTheme}`}>{description}</p>
        <span className={`cardLine theme-${currentTheme}`} />
        <div className={`cardPriority theme-${currentTheme}`}>
          <div>
            <h3 className={`cardSubtitle theme-${currentTheme}`}>Priority</h3>
            <p className={`cardSubtext theme-${currentTheme}`}>
              <span
                className={`cardPrimaryIcon theme-${currentTheme} priorityClass-${currentPriority}`}
                priority={priority}
              />
           {priority}
            </p>
          </div>
          <div>
            <h3 className={`cardSubtitle theme-${currentTheme}`}>Deadline</h3>
            <p className={`cardSubtextDeadline theme-${currentTheme}`}>{deadline}</p>
          </div>
          <div className={`IconWrapper theme-${currentTheme}`}>
            {deadline === formattedDate && (
              <span className={`cardIcon theme-${currentTheme}`}>
              <Icon id={'bell'} width={16} height={16} /></span>
             )}
             <span className={`cardIcon theme-${currentTheme}`}>
            <Icon  id={'arrow-circle-broken-right'} width={16} height={16} /></span>
            <span className={`cardIcon theme-${currentTheme}`}>
            <Icon  id={'pencil'} width={16} height={16} onClick={onOpen}/></span>
            {/* {showModal && (
              <EditCard
              />
            )} */}
         <span className={`cardIcon theme-${currentTheme}`}>
            <Icon className={`cardIcon theme-${currentTheme}`} id={'trash'} width={16} height={16} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


