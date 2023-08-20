import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigation} from 'navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
