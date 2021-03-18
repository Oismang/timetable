import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/apptext';
import { BLUE } from '../../constants/colors';


const WeekScreen = () => {


  return (
    <View style={styles.container}>
      <AppText>asdasdasd</AppText>
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

export default WeekScreen;
