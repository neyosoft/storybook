import {StyleSheet} from 'react-native';

import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  disabled: {
    opacity: 0.3,
  },
});
