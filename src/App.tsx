import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to CareItator Professional</Text>
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
