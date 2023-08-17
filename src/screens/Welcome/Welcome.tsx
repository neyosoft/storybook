import React from 'react';
import {FlatList, Image, ListRenderItem, View, ViewStyle} from 'react-native';

import {images} from 'theme';
import {styles} from './Welcome.styles';
import {AppText, Button, OnboardingSnapCard} from 'components';
import {
  FirstSlideEllipse,
  ThirdSlideEllipse,
  OnboardingFastIcon,
  SecondSlideEllipse,
} from 'icons';

interface Slide {
  image: any;
  title: string;
  cardTitle: string;
  description: string;
  imageTopMargin: number;
  cardDescription: string;
  cardPosition?: ViewStyle;
  background: React.JSX.Element;
}

const slides: Slide[] = [
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

const renderItem: ListRenderItem<Slide> = ({item}) => {
  return (
    <View style={styles.slideContainer}>
      {item.background}
      <Image
        source={item.image}
        style={[styles.slideImage, {top: item.imageTopMargin}]}
      />
      <OnboardingSnapCard
        title={item.cardTitle}
        style={[styles.snapCard, item.cardPosition]}
        icon={<OnboardingFastIcon />}
        description={item.cardDescription}
      />
      <View style={styles.textContainer}>
        <AppText variant="bold" style={styles.slideTitle}>
          {item.title}
        </AppText>
        <AppText style={styles.slideDescription}>{item.description}</AppText>
      </View>
    </View>
  );
};

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal={true}
        pagingEnabled={true}
        renderItem={renderItem}
        overScrollMode="never"
        scrollToOverflowEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.bottomContainer}>
        <Button label="Get Started" />
      </View>
    </View>
  );
};
