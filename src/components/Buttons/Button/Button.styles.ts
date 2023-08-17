import {StyleSheet} from 'react-native';

import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
  primary: {
    backgroundColor: colors.secondary,
  },
  default: {
    backgroundColor: '#E5EEFF',
  },
});
