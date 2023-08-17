import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import {colors} from 'theme';
import {styles} from './CreateAccount.styles';
import {AppText, BackButton, Button, Checkbox, TextField} from 'components';

export const CreateAccount = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
              <TextField placeholder="Enter Firstname" />
              <TextField placeholder="Enter Lastname" />
              <TextField placeholder="Enter email address" />
              <TextField placeholder="Enter email address" />
              <TextField placeholder="Password (Min. of 8 Character)" />
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
