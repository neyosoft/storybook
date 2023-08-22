import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

import {colors} from 'theme';
import {styles} from './Login.styles';
import {
  AppText,
  Button,
  TextField,
  BackButton,
  PasswordField,
} from 'components';
import {EmailInputIcon, PasswordInputIcon} from 'icons';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const Login = ({navigation}: IntroStackRoutes<IntroRoutes.Login>) => {
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
            Welcome Back
          </AppText>
          <AppText color={colors.white80}>
            Log back into your account and see available shifts
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
            <PasswordField
              placeholder="Password (Min. of 8 Character)"
              left={<PasswordInputIcon />}
              activeLeft={<PasswordInputIcon color={colors.secondary} />}
            />

            <View style={styles.resetContainer}>
              <AppText size="large">Forget Password?</AppText>
              <TouchableOpacity>
                <AppText
                  size="large"
                  variant="semi-bold"
                  color={colors.secondary}
                  onPress={() =>
                    navigation.navigate(IntroRoutes.ForgetPassword)
                  }>
                  Reset Now
                </AppText>
              </TouchableOpacity>
            </View>

            <Button label="Login" />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
