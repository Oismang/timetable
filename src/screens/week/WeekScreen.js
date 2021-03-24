import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwiper from '../../components/appswiper/AppSwiper';
import AppText from '../../components/apptext/AppText';
import DisplayDate from '../../components/displaydate/DisplayDate';
import IconButton, { IconTypes } from '../../components/iconbutton/IconButton';
import { BLUE, LIGHT_BLUE, LIGHT_SILVER } from '../../constants/colors';
import { WEEK_DAYS_COUNT } from '../../constants/common';
import { TOP_PADDING, WEEK_CALENDAR_HEIGHT, WEEK_CALENDAR_WIDTH } from '../../constants/sizes';
import { getMonthTextForWeek, getWeekCalendar } from '../../utils/weekUtils';
import DayLine from './DayLine';

const dateNow = new Date();
const initialState = [-1, 0, 1];

const WeekScreen = () => {
  const [data, setData] = useState(initialState);

  const onSwipe = (direction) => {
    setData(prevData => prevData.map(number => number + direction));
  }

  const renderHeader = () => {
    const date = new Date(new Date().setDate(dateNow.getDate() + data[1] * WEEK_DAYS_COUNT));

    return (
      <DisplayDate onSwipe={onSwipe}>
        {`${getMonthTextForWeek(date)} ${date.getFullYear()} г.`}
      </DisplayDate>
    )
  }

  const renderCalendar = () => {
    const items = data.map(number => {
      const date = new Date().setDate(dateNow.getDate() + number * WEEK_DAYS_COUNT);
      return getWeekCalendar(new Date(date));
    });

    return items.map((week, weekIndex) =>
      <View key={weekIndex} style={styles.calendarItemContainer}>
        <View style={styles.calendarItem}>
          {week.map((day, dayIndex) => (
            <DayLine key={dayIndex}
              dayIndex={dayIndex}
              isCurrentDay={data[weekIndex] === 0 && dateNow.getDate() === day}
              day={day}
            />
          ))}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <AppSwiper
        onSwipe={onSwipe}
        width={WEEK_CALENDAR_WIDTH}
        height={WEEK_CALENDAR_HEIGHT}>
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
    width: WEEK_CALENDAR_WIDTH,
    height: WEEK_CALENDAR_HEIGHT
  },
  calendarItem: {
    flex: 1,
    margin: 20,
    backgroundColor: LIGHT_BLUE
  }
});

export default WeekScreen;
