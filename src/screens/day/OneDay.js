import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AppModal from '../../components/appmodal/AppModal';
import AppText from '../../components/apptext/AppText';
import IconButton from '../../components/iconbutton/IconButton';
import { BLUE, DARK_BLUE, LIGHT_SILVER } from '../../constants/colors';
import { FULL_DAYS_OF_WEEK } from '../../constants/common';
import { formatDate } from '../../utils/common';

const OneDay = ({ day, dayOfWeek, isCurrentDay, currentDate }) => {
  const currentDayStyles = isCurrentDay ? styles.currentDay : {};
  const currentDayIconStyles = isCurrentDay ? DARK_BLUE : LIGHT_SILVER;

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={{ ...styles.header, ...currentDayStyles }}>
          <AppText style={{ ...styles.headerText, ...currentDayStyles }}>
            {`${FULL_DAYS_OF_WEEK[dayOfWeek]}, ${day}`}
          </AppText>
          <IconButton
            style={styles.headerIcon}
            onPress={() => setIsModalVisible(!isModalVisible)}
            size={27}
            iconName={"pluscircleo"}
            color={currentDayIconStyles}
          />
        </View>

        <AppModal isVisible={isModalVisible}
          setIsVisible={setIsModalVisible}
          title={formatDate(new Date(currentDate))}
        >
          <AppModal.Item text={"Добавить напоминание"} />
          <AppModal.Item text={"Добавить событие"} />
        </AppModal>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    position: "relative",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderColor: BLUE
  },
  headerText: {
    fontSize: 18,
  },
  headerIcon: {
    position: "absolute",
    right: 15
  },
  currentDay: {
    fontWeight: "700",
    color: DARK_BLUE,
    backgroundColor: LIGHT_SILVER,
  },
});

export default OneDay;
