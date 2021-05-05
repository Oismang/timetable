import { getDaysInMonth } from "./common";

export const getFirstDayOfMonth = (month, year) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export const getMonthCalendar = (month, year) => {
  const currentMonthDays = getDaysInMonth(month, year);
  const previousMonthDays = getDaysInMonth(month - 1, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);

  let currentDaysCounter = 1;
  let lastDaysCounter = 1;

  const days = Array.from(new Array(42), (_, i) => {
    if (i < firstDayOfMonth) {
      return {
        day: previousMonthDays - firstDayOfMonth + i + 1,
        monthOffset: -1,
        currentDate: new Date(year, month - 1, previousMonthDays - firstDayOfMonth + i + 2)
      }
    } else if (i >= firstDayOfMonth && currentDaysCounter <= currentMonthDays) {
      return {
        day: currentDaysCounter++,
        monthOffset: 0,
        currentDate: new Date(year, month, currentDaysCounter)
      }
    } else {
      return {
        day: lastDaysCounter++,
        monthOffset: 1,
        currentDate: new Date(year, month + 1, lastDaysCounter)
      }
    }
  });

  return days;
}

export const calcNewMonth = (currentDate, monthOffset) => {
  const { month, year } = currentDate;
  const date = new Date(year, month);

  date.setMonth(date.getMonth() + monthOffset);

  return { month: date.getMonth(), year: date.getFullYear() }
}