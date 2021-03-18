import React, { useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { SWIPER_SIZE } from '../../constants/common';

const SWIPE_DIRECTIONS = {
  prev: -1,
  next: 1
}

const AppSwiper = (props) => {
  const { children, width, height, isHorisontal = true, onSwipe } = props;

  const swiperPan = useRef(new Animated.Value(0)).current;

  const onResponerMove = () => {
    const moveDirection = isHorisontal ? { dx: swiperPan } : { dy: swiperPan };
    return Animated.event([null, moveDirection], { useNativeDriver: false });
  }

  const onResponerRelease = (e, { vx, vy, dx, dy }) => {
    const velocity = isHorisontal ? vx : vy;
    const distance = isHorisontal ? dx : dy;
    const size = isHorisontal ? width : height;

    if (Math.abs(velocity) >= 0.4 || Math.abs(distance) >= 0.4 * width) {
      const direction = distance > 0 ? SWIPE_DIRECTIONS.next : SWIPE_DIRECTIONS.prev;

      Animated.timing(swiperPan, {
        toValue: size * direction,
        duration: 150,
        useNativeDriver: true
      }).start(() => {
        onSwipe(direction * -1);
        swiperPan.setValue(0);
      });
    } else {
      Animated.spring(swiperPan, {
        toValue: 0,
        bounciness: 10,
        useNativeDriver: true
      }).start();
    }
  }

  const panResponderCalendar = useMemo(
    () => PanResponder.create({
      onMoveShouldSetPanResponder: (e, state) => !(state.dx === 0 && state.dy === 0),
      onPanResponderMove: onResponerMove(),
      onPanResponderRelease: onResponerRelease
    }),
    [children]
  );

  const getDimensions = () => {
    return isHorisontal
      ? { width: width * SWIPER_SIZE, height: height }
      : { width: width, height: height * SWIPER_SIZE }
  }

  return (
    <Animated.View
      style={{
        ...getDimensions(),
        flexDirection: isHorisontal ? "row" : "column",
        transform: isHorisontal ? [{ translateX: swiperPan }] : [{ translateY: swiperPan }],
      }}
      {...panResponderCalendar.panHandlers}
    >
      {children}
    </Animated.View>
  );
}

export default AppSwiper;

