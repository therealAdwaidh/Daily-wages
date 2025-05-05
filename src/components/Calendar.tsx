"use client"
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const renderHeader = () => {
    return (
      <div className="flex justify-between text-black items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>{'<'}</button>
        <div className="text-lg font-bold">
          {format(currentMonth, 'MMMM yyyy')}
        </div>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>{'>'}</button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="grid grid-cols-7 text-center text-gray-500 font-semibold">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
          <div
            className={`text-center p-2 m-[1px] rounded-md cursor-pointer transition-all
              ${!isSameMonth(day, monthStart) ? 'text-gray-500' : ''}
              ${isSameDay(day, today) ? 'bg-black text-white' : 'bg-gray-100'}
              ${format(cloneDay, 'd MMM yyyy') === '13 Jan 2022' ? 'bg-black text-white' : ''}`}
            key={day.toString()}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-xl shadow-md bg-white">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-4 text-center text-sm text-gray-500">
        Today is {format(today, 'eeee, MMMM d, yyyy')}
      </div>
    </div>
  );
};

export default Calendar;
