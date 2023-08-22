import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from 'theme';
import {CompletedIcon} from 'icons';
import {AppText, Button, CloseButton} from 'components';
import {styles} from './PasswordResetCompleted.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const PasswordResetCompleted = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.PasswordResetCompleted>) => {
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
          Your password reset was successful
        </AppText>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.bottoomTextContainer}>
          <CompletedIcon />
          <AppText style={styles.bottomDescription}>
            To log back into your account, kindly click on the back to login
            button to confirm reset.
          </AppText>
        </View>
        <Button
          label="Back to Login"
          onPress={() => navigation.navigate(IntroRoutes.Login)}
        />
      </View>
    </SafeAreaView>
  );
};
