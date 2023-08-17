import React from 'react';
import {View, Image} from 'react-native';

import {GetStartedElleipse} from 'icons';
import {styles} from './GetStarted.styles';
import {AppText, Button} from 'components';
import {colors, images, sizes} from 'theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IntroRoutes, IntroStackParamList} from 'types/navigation';

type Props = NativeStackScreenProps<
  IntroStackParamList,
  IntroRoutes.GetStarted
>;

export const GetStarted = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <GetStartedElleipse width={sizes.WINDOW_WIDTH} style={styles.ellipse} />
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
          onPress={() => navigation.navigate(IntroRoutes.QuickTip)}
        />
      </View>
    </View>
  );
};
