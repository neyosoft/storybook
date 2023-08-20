import {TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationBackIcon} from 'icons';
import {useNavigation} from '@react-navigation/native';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <NavigationBackIcon />
    </TouchableOpacity>
  );
};
