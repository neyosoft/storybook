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
  input: {
    flex: 1,
  },
});
