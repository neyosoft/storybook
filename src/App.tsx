import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {AppText, OnboardingSnapCard, TextField} from 'components';
import {
  ProfileInputIcon,
  OnboardingFastIcon,
  ProfileInputActiveIcon,
  PasswordInputIcon,
  PasswordInputActiveIcon,
  EyeClosedIcon,
} from 'icons';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.scrollview}>
      <View style={styles.container}>
        <AppText style={styles.label}>
          Welcome to CareItator Professional
        </AppText>

        <OnboardingSnapCard
          title="FAST"
          description="Secure & Reliable"
          icon={<OnboardingFastIcon />}
        />

        <TextField
          placeholder="Password"
          left={<PasswordInputIcon style={styles.leftIcon} />}
          activeLeft={<PasswordInputActiveIcon style={styles.leftIcon} />}
          right={<EyeClosedIcon />}
        />
        <TextField
          placeholder="Let go there"
          left={<ProfileInputIcon style={styles.leftIcon} />}
          activeLeft={<ProfileInputActiveIcon style={styles.leftIcon} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: 12,
  },
});
