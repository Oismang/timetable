import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { WHITE } from '../../constants/colors';

const AppText = ({ style, children }) =>
  <Text style={[
    styles.text,
    style,
  ]}>
    {children}
  </Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lora-VariableFont_wght",
    fontSize: 16,
    color: WHITE,
  }
});

export default AppText;
