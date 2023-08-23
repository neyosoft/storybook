import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F3F3F3',
  },
  focused: {
    borderWidth: 1,
    backgroundColor: '#F1F6FE',
    borderColor: 'rgba(0, 174, 239, 0.30)',
  },
  leftIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    fontWeight: '500',
  },
  indicator: {
    width: 18,
    height: 18,
    borderRadius: 100,
    backgroundColor: '#3777F9',
  },
});
