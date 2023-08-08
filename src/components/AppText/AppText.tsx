import React from 'react';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';

export const AppText = ({style, ...props}: TextInputProps) => {
  return (
    <View>
      <Text style={[style, styles.label]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: 'red',
    fontFamily: 'Roobert-Regular',
  },
});
