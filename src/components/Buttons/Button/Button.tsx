import React from 'react';
import {Pressable, PressableProps, ActivityIndicator} from 'react-native';

import {colors} from 'theme';
import {styles} from './Button.styles';
import {AppText} from 'components/AppText';

export interface ButtonProps extends PressableProps {
  label?: string;
  loading?: boolean;
  variant?: 'primary' | 'default';
}

export const Button = ({
  loading,
  variant = 'primary',
  style,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        styles[variant],
        {opacity: pressed ? 0.7 : 1},
        props.disabled ? styles.disabled : undefined,
        style,
      ]}
      {...props}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText
          size="large"
          variant="medium"
          color={variant === 'primary' ? colors.white : colors.dark}>
          {label}
        </AppText>
      )}
    </Pressable>
  );
};
