import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Platform,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {colors} from 'theme';
import {styles} from './CreateAccount.styles';
import {
  AppText,
  Button,
  Checkbox,
  TextField,
  BackButton,
  PasswordField,
} from 'components';
import {
  EmailInputIcon,
  ProfileInputIcon,
  PasswordInputIcon,
  PhoneNumberInputIcon,
} from 'icons';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const CreateAccount = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.CreateAccount>) => {
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
          <AppText color={colors.white80}>
            Get started and enjoy unlimited access to multiple bookings
          </AppText>
        </View>

        <KeyboardAvoidingView
          style={styles.formWrapper}
          keyboardVerticalOffset={60}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <TextField
              placeholder="Enter Firstname"
              left={<ProfileInputIcon />}
              activeLeft={<ProfileInputIcon color={colors.secondary} />}
            />
            <TextField
              placeholder="Enter Lastname"
              left={<ProfileInputIcon />}
              activeLeft={<ProfileInputIcon color={colors.secondary} />}
            />
            <TextField
              placeholder="Enter email address"
              left={<EmailInputIcon />}
              activeLeft={<EmailInputIcon color={colors.secondary} />}
            />
            <TextField
              placeholder="Enter phone number"
              left={<PhoneNumberInputIcon />}
              activeLeft={<PhoneNumberInputIcon color={colors.secondary} />}
            />
            <PasswordField
              placeholder="Password (Min. of 8 Character)"
              left={<PasswordInputIcon />}
              activeLeft={<PasswordInputIcon color={colors.secondary} />}
            />
            <Checkbox>
              <AppText style={styles.termLabel}>
                I have read, understood and I agree to CareItator’s{' '}
                <AppText style={styles.termLink}>Terms and conditions</AppText>,
                and <AppText style={styles.termLink}>Privacy Policy</AppText>.
              </AppText>
            </Checkbox>
            <Button
              label="Get Started"
              onPress={() =>
                navigation.navigate(IntroRoutes.AccountVerification, {
                  email: 'access2emma@gmail.com',
                  type: 'CreateAccount',
                })
              }
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
