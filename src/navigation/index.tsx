import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {QuickTip} from 'screens/Auth';
import {GetStarted, Welcome} from 'screens';
import {IntroRoutes, IntroStackParamList} from 'types/navigation';

const Stack = createNativeStackNavigator<IntroStackParamList>();

const screenOptions = {headerShown: false};

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={IntroRoutes.QuickTip}>
        <Stack.Screen name={IntroRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={IntroRoutes.GetStarted} component={GetStarted} />
        <Stack.Screen name={IntroRoutes.QuickTip} component={QuickTip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
