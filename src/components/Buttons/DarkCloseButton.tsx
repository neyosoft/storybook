import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {DarkCloseIcon} from 'icons';

interface CloseButtonProp {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const DarkCloseButton = ({style, onPress}: CloseButtonProp) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style} onPress={onPress || navigation.goBack}>
      <DarkCloseIcon />
    </TouchableOpacity>
  );
};
