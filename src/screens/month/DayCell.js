import React from 'react';
import { Pressable, StyleSheet, Vibration, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import AppText from '../../components/apptext/AppText';
import { BLUE, DARK_BLUE, DARK_SILVER, LIGHT_SILVER } from '../../constants/colors';
import { BUTTON_VIBRATION_DURATION, COUNT_OF_DAYS, COUNT_OF_WEEKS } from '../../constants/common';
import { DAY_SCREEN_ID, MONTH_SCREEN_ID } from '../../constants/sreens';

const DayCell = ({ day, monthOffset, isCurrentDay, currentDate,
  setIsModalVisible, setModalCurrentDate }) => {

  const textStyles = monthOffset === 0 ? {} : styles.notThisMonthDay;
  const currentDayStyle = isCurrentDay ? styles.currentDay : {};

  const onPress = () => {
    Navigation.mergeOptions(MONTH_SCREEN_ID, {
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
    setModalCurrentDate(currentDate.setDate(currentDate.getDate() - 1));
  }

  return (
    <View style={[styles.calendarCell, currentDayStyle]}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        hitSlop={{
          bottom: 50,
          left: 10,
          right: 40,
          top: 5
        }}
      >
        <AppText style={{ ...textStyles, ...currentDayStyle }}>{day}</AppText>
      </Pressable>
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
