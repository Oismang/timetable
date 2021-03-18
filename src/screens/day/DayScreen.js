import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BLUE } from '../../constants/colors';

const DayScreen = () => {
 
  return (
    <View style={styles.container}>
      <Text>DAY SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLUE
  }
});

export default DayScreen;
