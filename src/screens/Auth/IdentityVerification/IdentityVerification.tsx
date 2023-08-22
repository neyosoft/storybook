import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors, images} from 'theme';
import {styles} from './IdentityVerification.styles';
import {AppText, Button, CloseButton} from 'components';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const IdentityVerification = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.IdentityVerification>) => {
  const onSkip = () => navigation.navigate(IntroRoutes.QuickTip);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topArea}>
        <CloseButton style={styles.closeBtn} onPress={onSkip} />
        <AppText variant="medium" color={colors.white} style={styles.pageTitle}>
          One last Step 😇
        </AppText>
        <AppText color={colors.white} style={styles.pageDescription}>
          You are almost set! Your Location has been added successfully
        </AppText>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.bottoomTextContainer}>
          <Image source={images.metamap} style={styles.identityImage} />
          <AppText style={styles.bottomTitle}>
            Meta
            <AppText style={styles.bottomTitle} variant="semi-bold">
              Map
            </AppText>
          </AppText>
          <AppText style={styles.bottomDescription}>
            Click on the Verify Button to Get started.
          </AppText>
        </View>
        <Button label="Verify Me" />
        <Button
          variant="default"
          onPress={onSkip}
          style={styles.skipBtn}
          label="I will do this later"
        />
      </View>
    </SafeAreaView>
  );
};
