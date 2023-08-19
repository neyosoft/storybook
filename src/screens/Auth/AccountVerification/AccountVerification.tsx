import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, ScrollView, KeyboardAvoidingView} from 'react-native';

import {colors} from 'theme';
import {styles} from './AccountVerification.styles';
import {
  Button,
  AppText,
  Checkbox,
  TextField,
  BackButton,
  PasswordField,
} from 'components';
import {
  EmailInputIcon,
  ProfileInputIcon,
  PasswordInputIcon,
  EmailInputActiveIcon,
  PhoneNumberInputIcon,
  ProfileInputActiveIcon,
  PasswordInputActiveIcon,
  PhoneNumberInputActiveIcon,
} from 'icons';

export const AccountVerification = () => {
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
                <AppText style={styles.termLabel}>
                  I have read, understood and I agree to CareItator’s{' '}
                  <AppText style={styles.termLink}>
                    Terms and conditions
                  </AppText>
                  , and{' '}
                  <AppText style={styles.termLink}>Privacy Policy</AppText>.
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
