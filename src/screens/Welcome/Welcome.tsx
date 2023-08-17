import React from 'react';
import {FlatList, Image, ListRenderItem, View} from 'react-native';

import {Slide} from 'types/slide';
import {styles} from './Welcome.styles';
import {OnboardingFastIcon} from 'icons';
import {introSlideData} from 'data/introSlideData';
import {AppText, Button, OnboardingSnapCard} from 'components';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

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

export const Welcome = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.Welcome>) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={introSlideData}
        overScrollMode="never"
        renderItem={renderItem}
        scrollToOverflowEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.bottomContainer}>
        <Button
          label="Get Started"
          onPress={() => navigation.navigate(IntroRoutes.GetStarted)}
        />
      </View>
    </View>
  );
};
