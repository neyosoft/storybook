import React, {useEffect} from 'react';
import {Image, ListRenderItem, StatusBar, View} from 'react-native';

import {Slide} from 'types/slide';
import {styles} from './Welcome.styles';
import {OnboardingFastIcon} from 'icons';
import {introSlideData} from 'data/introSlideData';
import {AppText, Button, OnboardingSnapCard} from 'components';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {Dots} from './components';

const AnimatedButton = Animated.createAnimatedComponent(Button);

const renderItem: ListRenderItem<Slide> = ({item}) => (
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

export const Welcome = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.Welcome>) => {
  const scrollX = useSharedValue(0);
  const animation = useSharedValue(20);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const animatedButton = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(animation.value)}],
  }));

  useEffect(() => {
    animation.value = 0;
  }, [animation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.mainWrapper}>
        <Animated.FlatList
          horizontal={true}
          pagingEnabled={true}
          data={introSlideData}
          overScrollMode="never"
          renderItem={renderItem}
          onScroll={scrollHandler}
          scrollToOverflowEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Dots style={styles.dots} length={3} scrollX={scrollX} />

      <View style={styles.buttonContainer}>
        <AnimatedButton
          label="Get Started"
          style={animatedButton}
          onPress={() => navigation.navigate(IntroRoutes.GetStarted)}
        />
      </View>
    </View>
  );
};
