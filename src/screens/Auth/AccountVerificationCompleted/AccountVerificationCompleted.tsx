import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from 'theme';
import {CompletedIcon} from 'icons';
import {AppText, Button, CloseButton} from 'components';
import {styles} from './AccountVerificationCompleted.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const AccountVerificationCompleted = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.AccountVerificationCompleted>) => {
  const onSkip = () => navigation.navigate(IntroRoutes.QuickTip);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topArea}>
        <CloseButton style={styles.closeBtn} onPress={onSkip} />
        <AppText variant="medium" color={colors.white} style={styles.pageTitle}>
          Awesome 😎
        </AppText>
        <AppText color={colors.white80} style={styles.pageDescription}>
          Congratulations! Your Verification was successful
        </AppText>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.bottoomTextContainer}>
          <CompletedIcon />
          <AppText style={styles.bottomDescription}>
            We are making progress. Set up your location to continue
          </AppText>
        </View>
        <Button
          label="Set up Location"
          onPress={() => navigation.navigate(IntroRoutes.RequestLocationAccess)}
        />
        <Button
          variant="default"
          onPress={onSkip}
          label="Skip for now"
          style={styles.skipBtn}
        />
      </View>
    </SafeAreaView>
  );
};