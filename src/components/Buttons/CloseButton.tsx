import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NavigationCloseIcon} from 'icons';

export const CloseButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <NavigationCloseIcon />
    </TouchableOpacity>
  );
};
