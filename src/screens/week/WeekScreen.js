import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WeekScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WEEK SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WeekScreen;
