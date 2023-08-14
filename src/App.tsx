import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {AppText, OnboardingSnapCard} from 'components';
import {OnboardingFastIcon} from 'icons/OnboardingFastIcon';
import {OnboardingSecureIcon} from 'icons/OnboardingSecureIcon';
import {OnboardingLocationIcon} from 'icons/OnboardingLocationIcon';
import {Button} from 'components/Buttons';

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
        <OnboardingSnapCard
          title="100%"
          description="Location Friendly"
          icon={<OnboardingLocationIcon />}
        />
        <OnboardingSnapCard
          title="Instant"
          description="Credit Alert"
          icon={<OnboardingSecureIcon />}
        />

        <Button label="Get Started" />
        <Button variant="default" label="Get Started" />
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
});
