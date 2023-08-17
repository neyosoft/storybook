import React from 'react';
import {View, Image} from 'react-native';

import {colors, images, sizes} from 'theme';
import {GetStartedElleipse} from 'icons';
import {styles} from './GetStarted.styles';
import {AppText, Button} from 'components';

export const GetStarted = () => {
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
        <Button label="Create Account" />
        <Button style={styles.loginBtn} label="Login" variant="default" />
      </View>
    </View>
  );
};
