/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const App = () => {

  return (
    <>
      <ViewPager style={styles.viewPager} initialPage={0} overScrollMode={"never"}>
        <View style={styles.swipeContainer} collapsable={false} key="1">
          <View style={styles.content}>
            <Text>First page</Text>
          </View>
        </View>
        <View style={styles.swipeContainer} collapsable={false} key="2">
          <View style={styles.content}>
            <Text>Second page</Text>
          </View>
        </View>
      </ViewPager>
    </>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    height: 300
  },
  swipeContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "grey"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  }
});

export default App;
