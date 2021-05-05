import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwiper from '../../components/appswiper/AppSwiper';
import AppText from '../../components/apptext/AppText';
import DisplayDate from '../../components/displaydate/DisplayDate';
import { BLUE, DARK_SILVER, LIGHT_BLUE } from '../../constants/colors';
import { DAYS_OF_WEEK, MONTHS } from '../../constants/common';
import { MONTH_CALENDAR_HEIGHT, MONTH_CALENDAR_WIDTH, TOP_PADDING } from '../../constants/sizes';
import { calcNewMonth, getMonthCalendar } from '../../utils/monthUtils';
import { AddModal } from '../common/modals'
import DayCell from './DayCell';

const dateNow = {
  month: new Date().getMonth(),
  year: new Date().getFullYear()
}

const initialState = [-1, 0, 1];

const MonthScreen = () => {
  const [data, setData] = useState(initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalCurrentDate, setModalCurrentDate] = useState(null);

  const onSwipe = (direction) => {
    setData(prevData => prevData.map(number => number + direction));
  }

  const renderHeader = () => {
    const displayDate = calcNewMonth(dateNow, data[1]);

    return (
      <DisplayDate onSwipe={onSwipe}>
        {`${MONTHS[displayDate.month]} ${displayDate.year} г.`}
      </DisplayDate>
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

  const calendar = useMemo(
    () => {
      const items = data.map(number => {
        const { month, year } = calcNewMonth(dateNow, number);
        return getMonthCalendar(month, year);
      })

      return items.map((month, monthIndex) =>
        <View key={monthIndex} style={styles.calendarItemContainer}>
          <View style={styles.calendarItem}>
            {month.map((day, dayIndex) =>
                <DayCell key={dayIndex}
                  {...day}
                  setIsModalVisible={setIsModalVisible}
                  setModalCurrentDate={setModalCurrentDate}
                  isCurrentDay={data[monthIndex] === 0 && day.monthOffset === 0 && new Date().getDate() === day.day} />
              )}
          </View>
        </View>
      )
    },
    [data]
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      <AppSwiper
        onSwipe={onSwipe}
        width={MONTH_CALENDAR_WIDTH}
        height={MONTH_CALENDAR_HEIGHT}
      >
        {calendar}
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
  headerDaysContainer: {
    width: "100%",
    marginTop: 10,
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


