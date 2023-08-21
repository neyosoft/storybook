import React from 'react';
import {View, StatusBar} from 'react-native';

import {colors} from 'theme';
import {AppText, Button} from 'components';
import {styles} from './AccountVerificationCompleted.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompletedIcon} from 'icons';
import {CloseButton} from 'components/Buttons/CloseButton';

export const AccountVerificationCompleted = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.AccountVerificationCompleted>) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topArea}>
        <CloseButton />
        <AppText variant="medium" color={colors.white} style={styles.pageTitle}>
          Awesome 😎
        </AppText>
        <AppText color={colors.white} style={styles.pageDescription}>
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
          onPress={() => navigation.navigate(IntroRoutes.QuickTip)}
        />
        <Button
          variant="default"
          label="Skip for now"
          style={styles.loginBtn}
          onPress={() => navigation.navigate(IntroRoutes.QuickTip)}
        />
      </View>
    </SafeAreaView>
  );
};
