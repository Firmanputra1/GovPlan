import React, { useState } from 'react';
import StyledCalendar from '../components/StyledCalendar';

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [pins, setPins] = useState([]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const addPin = (day, text) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    setPins([...pins, { date, text }]);
  };

  const removePin = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    setPins(pins.filter(pin => pin.date !== date));
  };

  const togglePin = (day) => {
    const pinDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time portion for accurate comparison

    if (pinDate < today) {
      alert("Cannot pin past dates!");
      return;
    }

    const pin = pins.find(pin => pin.date === pinDate.toDateString());
    if (pin) {
      removePin(day);
    } else {
      const text = prompt("Enter pin text:");
      if (text) {
        addPin(day, text);
      }
    }
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <button onClick={handlePrevMonth}>Previous</button>
        <span style={{ margin: '0 10px' }}>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <StyledCalendar currentDate={currentDate} pins={pins} togglePin={togglePin} />
    </div>
  );
};

export default Calendar;
