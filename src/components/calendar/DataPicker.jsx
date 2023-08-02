import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import './dataPicker.css';


const DataPicker = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
            <Calendar 
            onChange={onChange} 
            value={date}
            minDate={new Date()}
            locale="en-EN"
            next2Label=""
            prev2Label=""
            />
        </div>
    )
}

export default DataPicker;