import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

import {colors} from 'theme';

interface Props extends TextProps {
  color?: string;
  variant?: 'normal' | 'medium' | 'bold';
  size?: 'normal' | 'small' | 'large' | 'xlarge' | 'xxlarge';
}

export const AppText = React.forwardRef<Text, Props>(
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
    color: colors.black,
    fontFamily: 'Roobert-Regular',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'Roobert-Medium',
  },
  bold: {
    fontWeight: '700',
    fontFamily: 'Roobert-Bold',
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
