import {StyleSheet} from 'react-native';

import {colors, sizes} from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  mainWrapper: {
    backgroundColor: '#E7F0FD',
  },
  slideContainer: {
    width: sizes.WINDOW_WIDTH,
  },
  slideImage: {
    width: 384,
    height: 432,
  },
  snapCard: {
    position: 'absolute',
  },
  textContainer: {
    padding: 40,
    paddingTop: 50,
    marginTop: -20,
    paddingBottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  slideTitle: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '600',
    textAlign: 'center',
  },
  slideDescription: {
    marginTop: 8,
    lineHeight: 24,
    color: '#4D4D4D',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  dots: {
    top: -170,
  },
  buttonContainer: {
    // flex: 1,
    padding: 20,
    marginTop: 40,
  },
});
