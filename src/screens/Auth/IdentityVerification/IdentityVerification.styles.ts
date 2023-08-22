import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainPrimary,
  },
  topArea: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  closeBtn: {
    top: 0,
    right: 20,
    position: 'absolute',
  },
  pageTitle: {
    fontSize: 30,
    lineHeight: 42,
  },
  pageDescription: {
    marginTop: 12,
    lineHeight: 24,
    textAlign: 'center',
  },
  bottomArea: {
    padding: 24,
    paddingBottom: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  identityImage: {
    width: 131,
    height: 131,
  },
  bottoomTextContainer: {
    rowGap: 8,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  bottomTitle: {
    fontSize: 24,
  },
  bottomDescription: {
    width: '90%',
    opacity: 0.5,
    lineHeight: 24,
    color: colors.dark,
    textAlign: 'center',
  },
  skipBtn: {
    marginTop: 24,
  },
});
