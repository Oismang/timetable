import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwiper from '../../components/appswiper/appswiper';
import AppText from '../../components/apptext/apptext';
import IconButton, { IconTypes } from '../../components/iconbutton/iconbutton';
import { BLUE, DARK_BLUE, DARK_SILVER, LIGHT_BLUE, LIGHT_SILVER, SILVER } from '../../constants/colors';
import { DAYS_OF_WEEK, MONTH } from '../../constants/common';
import { MONTH_CALENDAR_HEIGHT, MONTH_CALENDAR_WIDTH, TOP_PADDING } from '../../constants/sizes';
import { calcNewDate, getMonthCalendar } from '../../utils/monthUtils';
import DayCell from './DayCell';

const dateNow = new Date();
const currentDate = {
  month: dateNow.getMonth(),
  year: dateNow.getFullYear()
}

const initialState = [-1, 0, 1];

const MonthScreen = (props) => {
  const [data, setData] = useState(initialState);

  const onSwipe = (direction) => {
    setData(prevData => prevData.map(number => number + direction));
  }

  const renderHeader = () => {
    const displayDate = calcNewDate(currentDate, data[1]);

    return (
      <View style={styles.headerYearContainer}>
        <IconButton onPress={() => onSwipe(-1)} iconName={IconTypes.LEFT} color={LIGHT_SILVER} />
        <AppText style={styles.headerYearText}>
          {`${MONTH[displayDate.month]} ${displayDate.year} г.`}
        </AppText>
        <IconButton onPress={() => onSwipe(1)} iconName={IconTypes.RIGHT} color={LIGHT_SILVER} />
      </View>
    )
  }

  const renderDaysOfWeek = () =>
    <View style={styles.headerDaysContainer}>
      {DAYS_OF_WEEK.map((day, i) =>
        <View key={i} style={[styles.headerDayOfWeek, i === DAYS_OF_WEEK.length - 1 ? {} : styles.borderRight]}>
          <AppText>
            {day}
          </AppText>
        </View>
      )}
    </View>

  const renderCalendar = () => {
    const items = data.map(number => {
      const { month, year } = calcNewDate(currentDate, number);
      return getMonthCalendar(month, year);
    });

    return items.map((month, monthIndex) =>
      <View key={monthIndex} style={styles.calendarItemContainer}>
        <View style={styles.calendarItem}>
          {month.map((day, dayIndex) =>
            <DayCell key={dayIndex}
              {...day}
              isCurrentDay={data[monthIndex] === 0 && dateNow.getDate() === day.dayNumber} />
          )}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      <AppSwiper
        onSwipe={onSwipe}
        width={MONTH_CALENDAR_WIDTH}
        height={MONTH_CALENDAR_HEIGHT}
      >
        {renderCalendar()}
      </AppSwiper>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: TOP_PADDING,
    alignItems: "center",
    backgroundColor: BLUE
  },
  calendarItemContainer: {
    width: MONTH_CALENDAR_WIDTH,
    height: MONTH_CALENDAR_HEIGHT
  },
  calendarItem: {
    flex: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: LIGHT_BLUE,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  headerYearContainer: {
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerYearText: {
    fontSize: 22
  },
  headerDaysContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerDayOfWeek: {
    flex: 1,
    alignItems: "center",
  },
  borderRight: {
    borderRightColor: DARK_SILVER,
    borderRightWidth: 1,
    borderStyle: "solid"
  },
});

export default MonthScreen;


