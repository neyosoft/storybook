import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, ScrollView, KeyboardAvoidingView} from 'react-native';

import {colors} from 'theme';
import {styles} from './AccountVerification.styles';
import {Button, AppText, TextField, BackButton} from 'components';
import {ProfileInputIcon, ProfileInputActiveIcon} from 'icons';

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

              <Button label="Get Started" />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};
