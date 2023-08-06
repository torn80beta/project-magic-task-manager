import React from 'react';
import { useState, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { format, isToday } from 'date-fns';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import DatePicker from 'react-datepicker';
import './datePicker.scss';
import Icon from 'components/icon/Icon';
// import 'react-datepicker/dist/react-datepicker.css';

const DateCalendar = ({ getDeadline }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);

  const onChange = date => {
    getDeadline(date);
    setStartDate(date);
  };

  const formatDate = date => {
    if (isToday(date)) {
      return `Today, ${format(date, 'MMMM d')}`;
    }
    return format(date, 'EEEE, MMMM d');
  };

  const ExampleCustomInput = forwardRef(({ _, onClick }, ref) => (
    <button
      type="button"
      className={`button-custom-input theme-${currentTheme}`}
      onClick={onClick}
      ref={ref}
    >
      <span className="input-custom-text">{formatDate(startDate)}</span>
      <Icon id={'chevron-down'} width={18} height={18} />
    </button>
  ));
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        calendarStartDay={1}
        customInput={<ExampleCustomInput/>}
        calendarClassName={`theme-${currentTheme}`}
        // popperPlacement='right-end'
      />
    </div>
  );
};

export default DateCalendar;
