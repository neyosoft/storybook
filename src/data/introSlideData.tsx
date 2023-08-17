import React from 'react';
import {StyleSheet} from 'react-native';

import {images} from 'theme';
import {Slide} from 'types/slide';

import {FirstSlideEllipse, SecondSlideEllipse, ThirdSlideEllipse} from 'icons';

const styles = StyleSheet.create({
  firstBackgroundEllipse: {
    right: 0,
    position: 'absolute',
  },
  backgroundEllipse: {
    position: 'absolute',
  },
});

export const introSlideData: Slide[] = [
  {
    imageTopMargin: 40,
    image: images.introSlide1,
    cardPosition: {left: 20, top: '37%'},
    background: <FirstSlideEllipse style={styles.firstBackgroundEllipse} />,
    title: 'Effortless Scheduling for Professionals',
    cardTitle: 'FAST',
    cardDescription: 'Secure & Reliable',
    description: 'Seamlessly connects healthcare professionals and facilities',
  },
  {
    imageTopMargin: 0,
    cardTitle: '100%',
    image: images.introSlide2,
    cardPosition: {left: 20, top: '30%'},
    cardDescription: 'Location Friendly',
    background: <SecondSlideEllipse style={styles.backgroundEllipse} />,
    title: 'Flexible Shifts Limitless Possibilites',
    description:
      'Choose a convenient shift that suits your availability and is located closest to you',
  },
  {
    imageTopMargin: 0,
    image: images.introSlide3,
    cardTitle: 'Instant',
    cardPosition: {right: 20, top: '32%'},
    cardDescription: 'Credit Alert',
    background: <ThirdSlideEllipse style={styles.backgroundEllipse} />,
    title: 'Get Job, Get Paid Instantly',
    description:
      'Seamlessly connects healthcare professionals to available facilities',
  },
];
