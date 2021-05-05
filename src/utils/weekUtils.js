import { MONTHS } from "../constants/common";
import { getDaysInMonth } from "./common";

export const getWeekCalendar = (date) => {
  let week = [];

  date.setDate((date.getDate() - date.getDay() + 1));
  for (let i = 0; i < 7; i++) {
    week.push({
      day: new Date(date).getDate(),
      currentDate: new Date(date)
    });
    date.setDate(date.getDate() + 1);
  }

  return week;
}

export const getMonthTextForWeek = (date) => {
  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  const firstDayOfWeek = date.getDate() - date.getDay() + 1;

  const currentMonth = date.getMonth();
  const nextMonth = new Date(new Date().setMonth(currentMonth + 1)).getMonth();

  if (firstDayOfWeek + 6 > daysInMonth) {
    return `${MONTHS[currentMonth]}-${MONTHS[nextMonth]}`
  }
  return MONTHS[currentMonth];
}
