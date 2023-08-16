import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Welcome} from 'screens';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.scrollview}>
      <Welcome />
    </SafeAreaView>
  );

  //  return (
  //    <SafeAreaView style={styles.scrollview}>
  //      <View style={styles.container}>
  //        <AppText style={styles.label}>
  //          Welcome to CareItator Professional
  //        </AppText>
  //      </View>
  //    </SafeAreaView>
  //  );
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
