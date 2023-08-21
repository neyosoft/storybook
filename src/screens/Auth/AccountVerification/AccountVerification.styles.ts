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
  contentContainerStyle: {
    rowGap: 20,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  formBody: {
    alignItems: 'center',
  },
  otpInput: {
    height: 65,
    width: '85%',
  },
  underlineStyleBase: {
    width: 60,
    height: 60,
    fontSize: 16,
    borderRadius: 10,
    fontWeight: '500',
    color: colors.dark,
    borderColor: '#E6E6E6',
    fontFamily: 'Roobert-Medium',
    backgroundColor: colors.white,
  },
  underlineStyleHighLighted: {
    borderWidth: 1,
    borderColor: '#00AEEF4D',
    backgroundColor: '#F1F6FE',
  },
  textContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  getStartedBtn: {
    marginTop: 70,
  },
});
