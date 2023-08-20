import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topArea: {
    flex: 1,
    padding: 32,
    justifyContent: 'flex-end',
    backgroundColor: colors.mainPrimary,
  },
  ellipse: {
    top: 0,
    position: 'absolute',
  },
  pageTitle: {
    fontSize: 34,
    lineHeight: 42,
    marginRight: 20,
  },
  pageDescription: {
    marginTop: 18,
    lineHeight: 24,
  },
  pageImage: {
    width: 77,
    height: 43,
    bottom: -4,
    left: '55%',
    position: 'absolute',
  },
  bottomArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  bottoomTextContainer: {
    rowGap: 8,
    padding: 36,
    alignItems: 'center',
  },
  bottomTitle: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomDescription: {
    width: '80%',
    lineHeight: 24,
    color: '#4D4D4D',
    textAlign: 'center',
  },
  loginBtn: {
    marginTop: 24,
  },
});
