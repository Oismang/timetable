import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/apptext';
import { BLUE } from '../../constants/colors';


const ThreeDaysSceen = () => {
  return (
    <View style={styles.container}>
      <AppText>ThreeDaysSceen</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE
  },
});

export default ThreeDaysSceen;