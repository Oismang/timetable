import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwiper from '../../components/appswiper/AppSwiper';
import DisplayDate from '../../components/displaydate/DisplayDate';
import { BLUE, LIGHT_BLUE } from '../../constants/colors';
import { THREE_DAYS_COUNT } from '../../constants/common';
import { THREE_DAYS_CALENDAR_HEIGHT, THREE_DAYS_CALENDAR_WIDTH, TOP_PADDING } from '../../constants/sizes';
import { getMonthTextForThreeDays, getThreeDaysCalendar } from '../../utils/threeDaysUtils';
import { AddModal } from '../common/modals';
import DayItem from './DayItem';

const dateNow = new Date();
const initialState = [-1, 0, 1];

const ThreeDaysSceen = () => {
  const [data, setData] = useState(initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalCurrentDate, setModalCurrentDate] = useState(null);

  const onSwipe = (direction) => {
    setData(prevData => prevData.map(number => number + direction));
  }

  const renderHeader = () => {
    const date = new Date(new Date().setDate(dateNow.getDate() + data[1] * THREE_DAYS_COUNT));

    return (
      <DisplayDate onSwipe={onSwipe}>
        {`${getMonthTextForThreeDays(date)} ${date.getFullYear()} г.`}
      </DisplayDate>
    )
  }

  const renderCalendar = () => {
    const items = data.map(number => {
      const date = new Date().setDate(dateNow.getDate() + number * THREE_DAYS_COUNT);
      return getThreeDaysCalendar(new Date(date));
    });

    return items.map((days, daysIndex) =>
      <View key={daysIndex} style={styles.calendarItemContainer}>
        <View style={styles.calendarItem}>
          {days.map((day, dayIndex) => (
            <DayItem key={dayIndex}
              {...day}
              dayIndex={
                new Date(new Date().setDate(dateNow.getDate() + data[daysIndex] * THREE_DAYS_COUNT + dayIndex - 1))
                  .getDay()
              }
              setIsModalVisible={setIsModalVisible}
              setModalCurrentDate={setModalCurrentDate}
              isCurrentDay={data[daysIndex] === 0 && dateNow.getDate() === day.day}
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
        width={THREE_DAYS_CALENDAR_WIDTH}
        height={THREE_DAYS_CALENDAR_HEIGHT}>
        {renderCalendar()}
      </AppSwiper>

      <AddModal isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        currentDate={modalCurrentDate} />
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
    width: THREE_DAYS_CALENDAR_WIDTH,
    height: THREE_DAYS_CALENDAR_HEIGHT
  },
  calendarItem: {
    flex: 1,
    margin: 20,
    backgroundColor: LIGHT_BLUE
  }
});

export default ThreeDaysSceen;