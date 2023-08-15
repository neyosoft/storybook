import React, {useState} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {styles} from './TextField.styles';

export interface TextFieldProps extends TextInputProps {
  left?: JSX.Element;
  right?: JSX.Element;
  activeLeft?: JSX.Element;
  activeRight?: JSX.Element;
}

export const TextField = ({
  left,
  right,
  style,
  activeLeft,
  activeRight,
  ...props
}: TextFieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[styles.container, focused ? styles.focused : undefined, style]}>
      {focused ? activeLeft || left : left}
      <TextInput
        {...props}
        style={styles.input}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      {focused ? activeRight || right : right}
    </View>
  );
};
