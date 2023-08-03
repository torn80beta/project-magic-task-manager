import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import './datePicker.css';

const DateCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={date}
        minDate={new Date()}
        locale="en-US"
      />
    </div>
  );
};

export default DateCalendar;
