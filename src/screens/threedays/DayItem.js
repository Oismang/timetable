import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/AppText';
import { BLUE, DARK_BLUE, LIGHT_SILVER } from '../../constants/colors';
import { COUNT_OF_DAYS, DAYS_OF_WEEK, THREE_DAYS_COUNT } from '../../constants/common';

const DayItem = ({ day, isCurrentDay, dayIndex }) => {
  const currentDayStyles = isCurrentDay ? styles.currentDay : {};

  return (
    <View style={{ ...styles.container, ...currentDayStyles }}>
      <AppText style={{ ...currentDayStyles, ...styles.dayOfWeek }}>{DAYS_OF_WEEK[dayIndex]}</AppText>
      <View style={styles.verticalLine} />
      <AppText style={{ ...currentDayStyles, ...styles.day }}>{day}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: `${100 / THREE_DAYS_COUNT}%`,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: BLUE,
    borderBottomWidth: 3,
    borderStyle: "solid"
  },
  currentDay: {
    fontWeight: "700",
    color: DARK_BLUE,
    backgroundColor: LIGHT_SILVER,
  },
  dayOfWeek: {
    width: 40,
    textAlign: "center"
  },
  verticalLine: {
    height: "100%",
    width: 2,
    backgroundColor: BLUE
  },
  day: {
    marginLeft: 7
  }
});

export default DayItem;
