import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwiper from '../../components/appswiper/AppSwiper';
import DisplayDate from '../../components/displaydate/DisplayDate';
import { BLUE, LIGHT_BLUE } from '../../constants/colors';
import { MONTHS } from '../../constants/common';
import { ONE_DAY_CALENDAR_HEIGHT, ONE_DAY_CALENDAR_WIDTH, TOP_PADDING } from '../../constants/sizes';
import { datediff } from '../../utils/common';
import OneDay from './OneDay';

const dateNow = new Date();
const initialState = [-1, 0, 1];

const DayScreen = ({ currentDate }) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    if (currentDate) {
      const diff = datediff(dateNow, currentDate);
      setData(prevData => prevData.map((_, i) => diff + i - 1));
    }
  }, [currentDate]);

  const onSwipe = (direction) => {
    setData(prevData => prevData.map(number => number + direction));
  }

  const renderHeader = () => {
    const date = new Date(new Date().setDate(dateNow.getDate() + data[1]));

    return (
      <DisplayDate onSwipe={onSwipe}>
        {`${MONTHS[date.getMonth()]} ${date.getFullYear()} г.`}
      </DisplayDate>
    )
  }

  const renderCalendar = () => {
    const items = data.map(number => {
      const date = new Date(new Date().setDate(dateNow.getDate() + number));
      return {
        day: date.getDate(),
        currentDate: new Date(date),
        dayOfWeek: new Date(date.setDate(date.getDate() - 1)).getDay(),
      };
    });

    return items.map((day, daysIndex) =>
      <View key={daysIndex} style={styles.calendarItemContainer}>
        <View style={styles.calendarItem}>
          <OneDay
            {...day}
            isCurrentDay={data[daysIndex] === 0}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <AppSwiper
        onSwipe={onSwipe}
        width={ONE_DAY_CALENDAR_WIDTH}
        height={ONE_DAY_CALENDAR_HEIGHT}>
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
    width: ONE_DAY_CALENDAR_WIDTH,
    height: ONE_DAY_CALENDAR_HEIGHT
  },
  calendarItem: {
    flex: 1,
    margin: 20,
    backgroundColor: LIGHT_BLUE
  }
});

export default DayScreen;
