import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const IconTypes = {
  LEFT: "left",
  RIGHT: "right"
}

const IconButton = ({ onPress, style, iconName, size, color }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={style}>
      <Icon name={iconName} size={size ? size : 20} color={color}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({});

export default IconButton;
