import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Day = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  ${({ isPast }) => isPast && `
    background-color: #e0e0e0;
    cursor: not-allowed;
  `}
`;

const Pin = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const PinText = styled.div`
  background-color: rgba(255, 0, 0, 0.7);
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  position: absolute;
  top: 20px;
  right: 5px;
  z-index: 1;
`;

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const StyledCalendar = ({ currentDate, pins, togglePin }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time portion for accurate comparison

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<Day key={`empty-${i}`} />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i).toDateString();
    const isPast = new Date(year, month, i) < today;
    const pin = pins.find(pin => pin.date === date);
    days.push(
      <Day key={i} onClick={() => !isPast && togglePin(i)} isPast={isPast}>
        {i}
        {pin && <Pin />}
        {pin && <PinText>{pin.text}</PinText>}
      </Day>
    );
  }

  return (
    <CalendarContainer>
      {daysOfWeek.map(day => (
        <Day key={day}><strong>{day}</strong></Day>
      ))}
      {days}
    </CalendarContainer>
  );
};

export default StyledCalendar;
