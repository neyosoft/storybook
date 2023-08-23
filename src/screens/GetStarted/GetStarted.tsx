import React, {useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';

import {GetStartedElleipse} from 'icons';
import {styles} from './GetStarted.styles';
import {AppText, Button} from 'components';
import {colors, images, sizes} from 'theme';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(GetStartedElleipse);

export const GetStarted = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.GetStarted>) => {
  const pathAnimation = useSharedValue(-50);

  useEffect(() => {
    pathAnimation.value = 0;
  }, [pathAnimation]);

  const pathStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(pathAnimation.value)}],
  }));

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.mainPrimary}
      />
      <View style={styles.topArea}>
        <AnimatedIcon
          width={sizes.WINDOW_WIDTH}
          style={[styles.ellipse, pathStyle]}
        />
        <View>
          <AppText
            variant="medium"
            color={colors.white}
            style={styles.pageTitle}>
            Your Solution to Healthcare Staffing Challenges
          </AppText>
          <Image
            resizeMode="contain"
            style={styles.pageImage}
            source={images.getStarted}
          />
        </View>
        <AppText color={colors.white} style={styles.pageDescription}>
          Enjoy unlimited access to multiple bookings on the CareItator App. Get
          Started
        </AppText>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.bottoomTextContainer}>
          <AppText variant="semi-bold" style={styles.bottomTitle}>
            Get Started
          </AppText>
          <AppText style={styles.bottomDescription}>
            How will you like to get started with CareItator
          </AppText>
        </View>
        <Button
          label="Create Account"
          onPress={() => navigation.navigate(IntroRoutes.QuickTip)}
        />
        <Button
          style={styles.loginBtn}
          label="Login"
          variant="default"
          onPress={() => navigation.navigate(IntroRoutes.Login)}
        />
      </View>
    </View>
  );
};
