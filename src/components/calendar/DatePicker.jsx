import React from 'react';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { format, isToday } from 'date-fns';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import DatePicker from 'react-datepicker';
import './datePicker.scss';
import Icon from 'components/icon/Icon';

const DateCalendar = ({ selected, onSelect }) => {
  const currentTheme = useSelector(selectCurrentTheme);

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
      <span className="input-custom-text">{formatDate(selected)}</span>
      <Icon id={'chevron-down'} width={18} height={18} />
    </button>
  ));
  return (
    <div>
      <DatePicker
        selected={selected}
        onSelect={onSelect}
        minDate={new Date()}
        calendarStartDay={1}
        customInput={<ExampleCustomInput />}
        calendarClassName={`theme-${currentTheme}`}
      />
    </div>
  );
};

export default DateCalendar;
