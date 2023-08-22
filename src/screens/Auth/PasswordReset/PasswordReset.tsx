import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Platform,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

import {colors} from 'theme';
import {PasswordInputIcon} from 'icons';
import {styles} from './PasswordReset.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import {AppText, Button, BackButton, PasswordField} from 'components';

export const PasswordReset = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.PasswordReset>) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topCenter}>
          <BackButton />
          <AppText
            variant="semi-bold"
            style={styles.title}
            color={colors.white}>
            Reset Password
          </AppText>
          <AppText color={colors.white80}>
            Please create and confirm your new password
          </AppText>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.formWrapper}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <PasswordField
              placeholder="Password (Min. of 8 Character)"
              left={<PasswordInputIcon />}
              activeLeft={<PasswordInputIcon color={colors.secondary} />}
            />
            <PasswordField
              placeholder="Confirm password"
              left={<PasswordInputIcon />}
              activeLeft={<PasswordInputIcon color={colors.secondary} />}
            />

            <Button
              label="Reset Password"
              onPress={() =>
                navigation.navigate(IntroRoutes.PasswordResetCompleted)
              }
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
