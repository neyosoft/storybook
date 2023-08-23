import React, {useState} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import {styles} from './GoogPlacesTextField.styles';

export interface TextFieldProps extends TextInputProps {
  left?: JSX.Element;
  activeLeft?: JSX.Element;
}

export const GoogPlacesTextField = React.forwardRef<TextInput, TextFieldProps>(
  ({left, style, activeLeft, ...props}, ref) => {
    const [focused, setFocused] = useState(false);

    const _onBlur: TextInputProps['onBlur'] = e => {
      setFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };
    const _onFocus: TextInputProps['onFocus'] = e => {
      setFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    return (
      <View
        style={[styles.container, focused ? styles.focused : undefined, style]}>
        {(activeLeft || left) && (
          <View style={styles.leftIcon}>
            {focused ? activeLeft || left : left}
          </View>
        )}
        <TextInput
          ref={ref}
          {...props}
          onBlur={_onBlur}
          onFocus={_onFocus}
          style={styles.input}
        />
        {focused && <View style={styles.indicator} />}
      </View>
    );
  },
);
