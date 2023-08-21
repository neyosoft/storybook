import React, {useState} from 'react';
import {View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';

import {EyeClosedIcon, EyeOpenedIcon} from 'icons';
import {styles} from './PasswordField.styles';

export interface TextFieldProps extends TextInputProps {
  left?: JSX.Element;
  activeLeft?: JSX.Element;
}

export const PasswordField = ({
  left,
  style,
  activeLeft,
  ...props
}: TextFieldProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={[styles.container, focused ? styles.focused : undefined, style]}>
      {(activeLeft || left) && (
        <View style={styles.leftIcon}>
          {focused ? activeLeft || left : left}
        </View>
      )}
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={!showPassword}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      {focused && (
        <TouchableOpacity onPress={() => setShowPassword(value => !value)}>
          {showPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};
