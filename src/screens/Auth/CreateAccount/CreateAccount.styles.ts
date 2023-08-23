import {StyleSheet} from 'react-native';

import {colors} from 'theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.mainPrimary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.mainPrimary,
  },
  topCenter: {
    padding: 24,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    lineHeight: 42,
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    color: colors.white80,
  },
  formWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    rowGap: 20,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  getStartedBtn: {
    marginTop: 70,
  },
  termLabel: {
    flex: 1,
    fontSize: 12,
    marginLeft: 8,
    lineHeight: 16,
    color: '#828282',
  },
  termLink: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.mainPrimary,
    textDecorationLine: 'underline',
  },
});
