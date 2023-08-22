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
import {EmailInputIcon} from 'icons';
import {styles} from './ForgetPassword.styles';
import {AppText, Button, TextField, BackButton} from 'components';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const ForgetPassword = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.ForgetPassword>) => {
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
            Forget Password
          </AppText>
          <AppText color={colors.white80}>
            Verify your email so you can create a new password
          </AppText>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.formWrapper}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <TextField
              placeholder="Enter email address"
              left={<EmailInputIcon />}
              activeLeft={<EmailInputIcon color={colors.secondary} />}
            />

            <Button
              label="Reset Password"
              onPress={() =>
                navigation.navigate(IntroRoutes.AccountVerification, {
                  email: 'access2emma@gmail.com',
                  type: 'ForgetPassword',
                })
              }
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
