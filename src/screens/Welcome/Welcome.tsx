import React from 'react';
import {FlatList, Image, ListRenderItem, View} from 'react-native';

import {images} from 'theme';
import {AppText, Button} from 'components';
import {styles} from './Welcome.styles';
import {FirstSlideEllipse, SecondSlideEllipse, ThirdSlideEllipse} from 'icons';

interface Slide {
  image: any;
  title: string;
  description: string;
  background: React.JSX.Element;
}

const slides: Slide[] = [
  {
    image: images.introSlide1,
    background: <FirstSlideEllipse style={styles.firstBackgroundEllipse} />,
    title: 'Effortless Scheduling for Professionals',
    description: 'Seamlessly connects healthcare professionals and facilities',
  },
  {
    image: images.introSlide2,
    background: <SecondSlideEllipse style={styles.backgroundEllipse} />,
    title: 'Flexible Shifts Limitless Possibilites',
    description:
      'Choose a convenient shift that suits your availability and is located closest to you',
  },
  {
    image: images.introSlide3,
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
      <Image source={item.image} style={styles.slideImage} />
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
