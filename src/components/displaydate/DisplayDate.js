import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/AppText';
import { LIGHT_SILVER } from '../../constants/colors';
import IconButton, { IconTypes } from '../iconbutton/IconButton';

const DisplayDate = ({ onSwipe, children }) =>
  <View style={styles.container}>
    <IconButton onPress={() => onSwipe(-1)} iconName={IconTypes.LEFT} color={LIGHT_SILVER} />
    <AppText style={styles.text}>
      {children}
    </AppText>
    <IconButton onPress={() => onSwipe(1)} iconName={IconTypes.RIGHT} color={LIGHT_SILVER} />
  </View>

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 22
  }
});

export default DisplayDate;