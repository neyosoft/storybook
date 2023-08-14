import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

import {colors} from '@theme/colors';

export interface AppTextProps extends TextProps {
  color?: string;
  size?: 'normal' | 'xsmall' | 'small' | 'large' | 'xlarge' | 'xxlarge';
  variant?: 'normal' | 'medium' | 'semi-bold' | 'bold' | 'bolder';
}

export const AppText = React.forwardRef<Text, AppTextProps>(
  ({style, color, size = 'normal', variant = 'normal', ...props}, ref) => {
    const additionalStyle: TextStyle = {};

    if (color) {
      additionalStyle.color = color;
    }

    return (
      <Text
        ref={ref}
        style={[
          styles.label,
          styles[size],
          styles[variant],
          additionalStyle,
          style,
        ]}
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Roobert-Regular',
  },
  normal: {
    fontSize: 14,
    color: colors.dark,
    fontFamily: 'Roobert-Regular',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'Roobert-Medium',
  },
  ['semi-bold']: {
    fontWeight: '600',
    fontFamily: 'Roobert-SemiBold',
  },
  bold: {
    fontWeight: '700',
    fontFamily: 'Roobert-Bold',
  },
  bolder: {
    fontWeight: '800',
  },
  xsmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 12,
  },
  large: {
    fontSize: 16,
  },
  xlarge: {
    fontSize: 18,
  },
  xxlarge: {
    fontSize: 20,
  },
});
