import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {colors} from 'theme';
import {styles} from './AccountVerification.styles';
import {Button, AppText, BackButton} from 'components';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';

export const AccountVerification = ({
  navigation,
  route,
}: IntroStackRoutes<IntroRoutes.AccountVerification>) => {
  const {email, type} = route.params;

  const [otp, setOTP] = useState('');

  const handleSubmit = () => {
    if (type === 'CreateAccount') {
      navigation.navigate(IntroRoutes.AccountVerificationCompleted);
    } else {
      navigation.navigate(IntroRoutes.PasswordReset);
    }
  };

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
            Verify Email Address
          </AppText>
          <AppText color={colors.white50}>
            Kindly enter the OTP code that was sent to {email}
          </AppText>
        </View>

        <View style={styles.formWrapper}>
          <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
              <View style={styles.formBody}>
                <OTPInputView
                  pinCount={4}
                  onCodeChanged={setOTP}
                  style={styles.otpInput}
                  keyboardType="number-pad"
                  placeholderTextColor="#79787A"
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                />

                <View style={styles.textContainer}>
                  <AppText size="large">Didn’t receive OTP code?</AppText>
                  <TouchableOpacity>
                    <AppText
                      size="large"
                      variant="semi-bold"
                      color={colors.mainPrimary}>
                      Resend code
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                label="Verify"
                disabled={otp.length !== 4}
                onPress={handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};
