import { MONTHS } from "../constants/common";
import { getDaysInMonth } from "./common";

export const getThreeDaysCalendar = (date) => {
  let days = [];

  for (let i = 0; i < 3; i++) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }

  return days;
}

export const getMonthTextForThreeDays = (date) => {
  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());

  const currentMonth = date.getMonth();
  const nextMonth = new Date(new Date().setMonth(currentMonth + 1)).getMonth();

  if (date.getDate() + 2 > daysInMonth) {
    return `${MONTHS[currentMonth]}-${MONTHS[nextMonth]}`
  }
  return MONTHS[currentMonth];
}