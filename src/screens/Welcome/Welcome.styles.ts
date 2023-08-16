import {StyleSheet} from 'react-native';
import {colors, sizes} from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7F0FD',
  },
  slideContainer: {
    width: sizes.WINDOW_WIDTH,
  },
  firstBackgroundEllipse: {
    right: 0,
    position: 'absolute',
  },
  backgroundEllipse: {
    position: 'absolute',
  },
  slideImage: {
    width: 384,
    height: 432,
  },
  textContainer: {
    paddingTop: 50,
    marginTop: -20,
    padding: 40,
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
  bottomContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});
