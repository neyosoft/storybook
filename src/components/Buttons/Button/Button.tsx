import React from 'react';
import {Pressable, PressableProps, ActivityIndicator} from 'react-native';

import {colors} from 'theme';
import {styles} from './Button.styles';
import {AppText} from 'components/AppText';

export interface ButtonProps extends PressableProps {
  label?: string;
  loading?: boolean;
}

export const Button = ({loading, style, label, ...props}: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {opacity: pressed ? 0.7 : 1},
        props.disabled ? styles.disabled : undefined,
        style,
      ]}
      {...props}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText variant="medium" size="large" color={colors.white}>
          {label}
        </AppText>
      )}
    </Pressable>
  );
};
