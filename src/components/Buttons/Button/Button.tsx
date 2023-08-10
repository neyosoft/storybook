import React from 'react';
import {Pressable, PressableProps, ActivityIndicator} from 'react-native';

import {styles} from './Button.styles';
import {AppText} from 'components/AppText';

interface Props extends PressableProps {
  loading?: boolean;
  label?: string;
}

export const Button = ({loading, style, label, ...props}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {opacity: pressed ? 0.5 : 1},
        style,
      ]}
      {...props}>
      {loading ? <ActivityIndicator /> : <AppText>{label}</AppText>}
    </Pressable>
  );
};
