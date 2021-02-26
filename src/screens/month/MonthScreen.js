import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MonthScreen = (props) => {

  return (
    <View style={styles.container}>
      <Text>MONTH SCREEN</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default MonthScreen;


