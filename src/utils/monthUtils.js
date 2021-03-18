export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

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
        dayNumber: previousMonthDays - firstDayOfMonth + i + 1,
        monthOffset: -1
      }
    } else if (i >= firstDayOfMonth && currentDaysCounter <= currentMonthDays) {
      return {
        dayNumber: currentDaysCounter++,
        monthOffset: 0
      }
    } else {
      return {
        dayNumber: lastDaysCounter++,
        monthOffset: 1
      }
    }
  });

  return days;
}

export const calcNewDate = (currentDate, monthOffset) => {
  const { month, year } = currentDate;
  const date = new Date(year, month);

  date.setMonth(date.getMonth() + monthOffset);

  return { month: date.getMonth(), year: date.getFullYear() }
}