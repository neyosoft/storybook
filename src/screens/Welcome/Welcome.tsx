import React from 'react';
import {FlatList, Image, ListRenderItem, View} from 'react-native';

import {Slide} from 'types/slide';
import {styles} from './Welcome.styles';
import {OnboardingFastIcon} from 'icons';
import {introSlideData} from 'data/introSlideData';
import {AppText, Button, OnboardingSnapCard} from 'components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IntroRoutes, IntroStackParamList} from 'types/navigation';

type Props = NativeStackScreenProps<IntroStackParamList, IntroRoutes.Welcome>;

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

export const Welcome = ({navigation}: Props) => {
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
