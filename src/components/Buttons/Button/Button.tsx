import React from 'react';
import {Pressable, PressableProps, ActivityIndicator, View} from 'react-native';

import {colors} from 'theme';
import {styles} from './Button.styles';
import {AppText} from 'components/AppText';

export interface ButtonProps extends PressableProps {
  label?: string;
  loading?: boolean;
  variant?: 'primary' | 'default';
}

export const Button = React.forwardRef<View, ButtonProps>(
  ({loading, variant = 'primary', style, label, ...props}, ref) => {
    return (
      <Pressable
        ref={ref}
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
  },
);
