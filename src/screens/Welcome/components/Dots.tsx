import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {sizes} from 'theme';

interface DotProps {
  length: number;
  scrollX: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
}

interface ItemProps {
  index: number;
  scrollX: SharedValue<number>;
}

function getEmptyArray(length: number): string[] {
  return Array(length).fill('');
}

export const Dots = ({style, length, scrollX}: DotProps) => {
  return (
    <View style={[styles.container, style]}>
      {getEmptyArray(length).map((_, index) => (
        <DotItem scrollX={scrollX} index={index} key={index} />
      ))}
      <View />
    </View>
  );
};

const DotItem = ({index, scrollX}: ItemProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollX.value,
      [
        sizes.WINDOW_WIDTH * (index - 1),
        sizes.WINDOW_WIDTH * index,
        sizes.WINDOW_WIDTH * (index + 1),
      ],
      ['#DFF2FA', '#00AEEF', '#DFF2FA'],
    ),
  }));

  return <Animated.View style={[styles.dot, animatedStyle]} key={index} />;
};

const styles = StyleSheet.create({
  container: {
    columnGap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#DFF2FA',
  },
});
