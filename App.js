/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Pressable, Vibration } from 'react-native';
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
      <Pressable android_ripple={{color: "grey", borderless: true}} onLongPress={() => Vibration.vibrate(50)}>
          <Text style={styles.button}>
              skdljfslkjfslkdf
          </Text>
      </Pressable>
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
  },
  button: {
    margin: 100,
    backgroundColor: "blue",
    height: 50
  }
});

export default App;
