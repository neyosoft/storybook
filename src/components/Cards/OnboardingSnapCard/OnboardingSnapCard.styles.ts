import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    columnGap: 8,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7F0FD',
  },
});
