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
  mapContainer: {
    flex: 1,
    padding: 20,
  },
  contentContainerStyle: {
    rowGap: 20,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  mapItemRowContainer: {
    padding: 10,
    columnGap: 9,
    flexDirection: 'row',
  },
  mapItemRowTitle: {},
  mapItemRowSubtitle: {
    opacity: 0.5,
    lineHeight: 24,
  },
});
