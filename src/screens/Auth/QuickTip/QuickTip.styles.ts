import {StyleSheet} from 'react-native';

import {colors} from 'theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.mainPrimary,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.mainPrimary,
  },
  topCenter: {
    marginVertical: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    lineHeight: 42,
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  tipRow: {
    gap: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  getStartedBtn: {
    marginTop: 70,
  },
});
