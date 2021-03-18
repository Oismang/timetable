import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/apptext';
import { BLUE, DARK_BLUE, DARK_SILVER, LIGHT_SILVER } from '../../constants/colors';
import { COUNT_OF_DAYS, COUNT_OF_WEEKS } from '../../constants/common';

const DayCell = ({ dayNumber, monthOffset, isCurrentDay }) => {
  const textStyles = monthOffset === 0 ? {} : styles.notThisMonthDay;
  const currentDayStyle = isCurrentDay ? styles.currentDay : {};

  return (
    <View style={[styles.calendarCell, currentDayStyle]}>
      <AppText style={{ ...textStyles, ...currentDayStyle }}>{dayNumber}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  calendarCell: {
    flex: 1,
    flexBasis: `${100 / COUNT_OF_DAYS}%`,
    height: `${100 / COUNT_OF_WEEKS}%`,
    paddingLeft: 10,
    borderColor: BLUE,
    borderWidth: 1,
    borderStyle: "solid"
  },
  notThisMonthDay: {
    color: DARK_SILVER
  },
  currentDay: {
    backgroundColor: LIGHT_SILVER,
    color: DARK_BLUE,
    fontWeight: "700"
  }
});

export default DayCell;
