import { MONTH } from "../constants/common";
import { getDaysInMonth } from "./common";

export const getWeekCalendar = (date) => {
  let week = [];

  date.setDate((date.getDate() - date.getDay() + 1));
  for (let i = 0; i < 7; i++) {
      week.push(new Date(date).getDate()); 
      date.setDate(date.getDate() + 1);
  }

  return week;
}

export const getMonthText = (date) => {
  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  const firstDayOfWeek = date.getDate() - date.getDay() + 1;

  if (firstDayOfWeek + 6 > daysInMonth) {
    return `${MONTH[date.getMonth()]}-${MONTH[new Date(date.setMonth(date.getMonth() + 1)).getMonth()]}`
  }
  return MONTH[date.getMonth()];
}
