"use client"
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const renderHeader = () => {
    return (
      <div className="flex justify-between  bg-white text-black items-center p-2">
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
      <div className="grid grid-cols-7  bg-white text-center py-2 text-gray-500 font-semibold">
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
            className={`text-center p-2 m-[1px] rounded-4xl cursor-pointer  border-color bg-white border transition-all
              ${!isSameMonth(day, monthStart) ? 'text-gray-200' : ''}
              ${isSameDay(day, today) ? 'backgroundcolor3 text-white' : 'bg-gray-100'}
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
    <div className="w-full max-w-sm  mx-auto p-4 rounded-xl  shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-4 text-center text-sm text-gray-500 ">
        Today is {format(today, 'eeee, MMMM d, yyyy')}
      </div>
      <div className="py-4 flex justify-center">
        <button className='backgroundcolor3 text-white py-2 px-5 w-80 rounded-4xl'>Create Job</button>
      </div>
    </div>
  );
};

export default Calendar;
