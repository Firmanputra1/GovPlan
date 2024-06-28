import React, { useState } from 'react';
import { StyledCalender, CalenderGrid, CalenderDay } from '../components/StyledCalender'; // Sesuaikan path-nya

const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // State untuk menyimpan bulan dan tahun saat ini
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // State untuk menyimpan pengingat
    const [reminders, setReminders] = useState({});

    // State untuk menyimpan tanggal yang ditandai
    const [markedDates, setMarkedDates] = useState([]);

    // Mengubah bulan berikutnya
    const nextMonth = () => {
        setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
        setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    };

    // Mengubah bulan sebelumnya
    const prevMonth = () => {
        setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
        setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    };

    // Menambahkan pengingat
    const addReminder = (day) => {
        const currentDate = new Date();
        const selectedDate = new Date(currentYear, currentMonth, day);

        if (selectedDate > currentDate) {
            const reminder = prompt(`Tambahkan pengingat untuk tanggal ${day}:`);
            if (reminder) {
                const key = `${currentYear}-${currentMonth}-${day}`;
                setReminders({ ...reminders, [key]: reminder });
            }
        } else {
            alert(`Tidak dapat menambahkan pengingat untuk tanggal yang sudah lewat.`);
        }
    };

    // Menghapus pengingat
    const removeReminder = (day) => {
        const key = `${currentYear}-${currentMonth}-${day}`;
        if (window.confirm(`Apakah Anda yakin ingin menghapus pengingat untuk tanggal ${day}?`)) {
            const newReminders = { ...reminders };
            delete newReminders[key];
            setReminders(newReminders);
        }
    };

    // Menandai atau menghapus tanda pada tanggal
    const toggleMarkedDate = (day) => {
        if (markedDates.includes(day)) {
            setMarkedDates(markedDates.filter(date => date !== day));
        } else {
            setMarkedDates([...markedDates, day]);
        }
    };

    // Mendapatkan jumlah hari dalam bulan dan tahun tertentu
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Mendapatkan hari pertama dalam bulan dan tahun tertentu
    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    // Menghasilkan grid hari-hari dalam kalender
    const generateCalenderGrid = () => {
        const totalDays = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

        let grid = [];

        // Menambahkan hari-hari sebelum hari pertama bulan
        for (let i = 0; i < firstDay; i++) {
            grid.push(<CalenderDay key={`empty-${i}`} />);
        }

        // Menambahkan hari-hari dalam bulan
        for (let day = 1; day <= totalDays; day++) {
            const hasReminder = reminders.hasOwnProperty(`${currentYear}-${currentMonth}-${day}`);
            const isMarked = markedDates.includes(day);

            grid.push(
                <CalenderDay key={day} onClick={() => addReminder(day)}>
                    {day}
                    {hasReminder && (
                        <span className="pin" onClick={(e) => { e.stopPropagation(); removeReminder(day); }}>📌</span>
                    )}
                    {isMarked && <span> &#10003; </span>}
                </CalenderDay>
            );
        }

        return grid;
    };

    return (
        <StyledCalender>
            <h2>{months[currentMonth]} {currentYear}</h2>
            <div>
                <button onClick={prevMonth}>Prev</button>
                <button onClick={nextMonth}>Next</button>
            </div>
            <CalenderGrid>
                {/* Header hari */}
                {daysOfWeek.map(day => (
                    <CalenderDay key={day}>{day}</CalenderDay>
                ))}
                {/* Grid kalender */}
                {generateCalenderGrid()}
            </CalenderGrid>
        </StyledCalender>
    );
}

export default Calendar;
