import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/AppText';

const OneDay = ({ day }) => {
  return (
    <View style={styles.container}>
      <AppText>{day}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default OneDay;
