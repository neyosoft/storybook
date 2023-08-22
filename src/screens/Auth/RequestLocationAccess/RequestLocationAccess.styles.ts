import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainPrimary,
  },
  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomArea: {
    padding: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  bottoomTextContainer: {
    rowGap: 8,
    padding: 26,
    alignItems: 'center',
  },
  bottomTitle: {
    fontSize: 24,
    marginTop: 10,
    lineHeight: 28,
    textAlign: 'center',
  },
  bottomDescription: {
    width: '90%',
    opacity: 0.5,
    lineHeight: 24,
    color: colors.dark,
    textAlign: 'center',
  },
  loginBtn: {
    marginTop: 24,
  },
});
