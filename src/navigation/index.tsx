import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from 'theme';
import {GetStarted, Welcome} from 'screens';
import {CreateAccount, QuickTip} from 'screens/Auth';
import {IntroRoutes, IntroStackParamList} from 'types/navigation';

const theme = DefaultTheme;
theme.colors.background = colors.white;

const Stack = createNativeStackNavigator<IntroStackParamList>();

const screenOptions = {headerShown: false};

export function AppNavigation() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={IntroRoutes.Welcome}>
        <Stack.Screen name={IntroRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={IntroRoutes.QuickTip} component={QuickTip} />
        <Stack.Screen name={IntroRoutes.GetStarted} component={GetStarted} />
        <Stack.Screen
          component={CreateAccount}
          name={IntroRoutes.CreateAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
