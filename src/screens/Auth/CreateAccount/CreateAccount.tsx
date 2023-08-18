import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, ScrollView, KeyboardAvoidingView} from 'react-native';

import {colors} from 'theme';
import {styles} from './CreateAccount.styles';
import {
  AppText,
  BackButton,
  Button,
  Checkbox,
  PasswordField,
  TextField,
} from 'components';
import {
  EmailInputIcon,
  ProfileInputIcon,
  EmailInputActiveIcon,
  PhoneNumberInputIcon,
  ProfileInputActiveIcon,
  PhoneNumberInputActiveIcon,
  PasswordInputIcon,
  PasswordInputActiveIcon,
} from 'icons';

export const CreateAccount = () => {
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
            Create Account
          </AppText>
          <AppText color={colors.white50}>
            Get started and enjoy unlimited access to multiple bookings
          </AppText>
        </View>

        <View style={styles.formWrapper}>
          <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
              <TextField
                placeholder="Enter Firstname"
                left={<ProfileInputIcon />}
                activeLeft={<ProfileInputActiveIcon />}
              />
              <TextField
                placeholder="Enter Lastname"
                left={<ProfileInputIcon />}
                activeLeft={<ProfileInputActiveIcon />}
              />
              <TextField
                placeholder="Enter email address"
                left={<EmailInputIcon />}
                activeLeft={<EmailInputActiveIcon />}
              />
              <TextField
                placeholder="Enter phone number"
                left={<PhoneNumberInputIcon />}
                activeLeft={<PhoneNumberInputActiveIcon />}
              />
              <PasswordField
                placeholder="Password (Min. of 8 Character)"
                left={<PasswordInputIcon />}
                activeLeft={<PasswordInputActiveIcon />}
              />
              <Checkbox>
                <AppText>
                  I have read, understood and I agree to CareItator’s Terms and
                  conditions, and Privacy Policy.
                </AppText>
              </Checkbox>
              <Button label="Get Started" />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};
