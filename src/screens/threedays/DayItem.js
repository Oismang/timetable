import React from 'react';
import { Pressable, StyleSheet, Vibration, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import AppText from '../../components/apptext/AppText';
import { BLUE, DARK_BLUE, LIGHT_SILVER } from '../../constants/colors';
import { BUTTON_VIBRATION_DURATION, DAYS_OF_WEEK, THREE_DAYS_COUNT } from '../../constants/common';
import { DAY_SCREEN_ID, THREE_DAYS_SCREEN_ID } from '../../constants/sreens';

const DayItem = ({ day, isCurrentDay, dayIndex, currentDate,
  setIsModalVisible, setModalCurrentDate }) => {
  const currentDayStyles = isCurrentDay ? styles.currentDay : {};

  const onPress = () => {
    Navigation.mergeOptions(THREE_DAYS_SCREEN_ID, {
      bottomTabs: {
        currentTabId: DAY_SCREEN_ID
      }
    });
    Navigation.updateProps(DAY_SCREEN_ID, {
      currentDate: currentDate
    });
  }

  const onLongPress = () => {
    Vibration.vibrate(BUTTON_VIBRATION_DURATION);
    setIsModalVisible(true);
    setModalCurrentDate(currentDate);
  }

  return (
    <View style={{ ...styles.container, ...currentDayStyles }}>
      <AppText style={{ ...currentDayStyles, ...styles.dayOfWeek }}>{DAYS_OF_WEEK[dayIndex]}</AppText>
      <View style={styles.verticalLine} />
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        hitSlop={{
          bottom: 70,
          left: 50,
          right: 300,
          top: 70
        }}
      >
        <AppText style={{ ...currentDayStyles, ...styles.day }}>{day}</AppText>
      </Pressable>
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
