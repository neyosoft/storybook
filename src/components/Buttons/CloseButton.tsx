import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NavigationCloseIcon} from 'icons';

interface CloseButtonProp {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const CloseButton = ({style, onPress}: CloseButtonProp) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style} onPress={onPress || navigation.goBack}>
      <NavigationCloseIcon />
    </TouchableOpacity>
  );
};
