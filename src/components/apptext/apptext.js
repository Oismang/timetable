import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { WHITE } from '../../constants/colors';

const AppText = ({ style, isItalik = false, children }) =>
  <Text style={[
    styles.text,
    style,
    isItalik ? { fontFamily: "Lora-Italic-VariableFont_wght" } : { fontFamily: "Lora-VariableFont_wght" }
  ]}>
    {children}
  </Text>

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: WHITE,
  }
});

export default AppText;
