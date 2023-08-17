import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './Checkbox.styles';
import {CheckboxCheckedIcon, CheckboxUncheckedIcon} from 'icons';
import {AppText} from 'components/AppText';

export interface CheckboxProp {
  label?: string;
  checked?: boolean;
  onPress?: () => void;
}

export const Checkbox = ({
  label,
  onPress,
  children,
  checked = false,
}: PropsWithChildren<CheckboxProp>) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      </TouchableOpacity>

      {label ? <AppText style={styles.label}>{label}</AppText> : children}
    </View>
  );
};
