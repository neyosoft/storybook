import React from 'react';
import {View, StatusBar, Image, ImageBackground} from 'react-native';

import {images} from 'theme';
import {AppText, Button, DarkCloseButton} from 'components';
import {styles} from './RequestLocationAccess.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const RequestLocationAccess = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.RequestLocationAccess>) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground style={styles.main} source={images.randomMapBg}>
        <View style={styles.bottomArea}>
          <DarkCloseButton style={styles.closeBtn} />
          <View style={styles.bottoomTextContainer}>
            <AppText variant="semi-bold" style={styles.bottomTitle}>
              Allow CareItator to use your location?
            </AppText>
            <AppText style={styles.bottomDescription}>
              Your location will be used to find the closest facility to you
            </AppText>

            <Image source={images.randomMap} />
          </View>
          <Button
            label="Set up Location"
            onPress={() => navigation.navigate(IntroRoutes.MyLocation)}
          />
          <Button
            variant="default"
            label="Skip for now"
            style={styles.loginBtn}
            onPress={() => navigation.navigate(IntroRoutes.QuickTip)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
