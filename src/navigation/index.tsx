import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from 'theme';
import {GetStarted, Welcome} from 'screens';
import {
  QuickTip,
  MyLocation,
  CreateAccount,
  AccountVerification,
  IdentityVerification,
  RequestLocationAccess,
  AccountVerificationCompleted,
} from 'screens/Auth';
import {IntroRoutes, IntroStackParamList} from 'types/navigation';

const theme = DefaultTheme;
theme.colors.background = colors.white;

const Stack = createNativeStackNavigator<IntroStackParamList>();

const screenOptions = {headerShown: false};

export function AppNavigation() {
  return (
    <NavigationContainer theme={theme} onReady={() => SplashScreen.hide()}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={IntroRoutes.Welcome}>
        <Stack.Screen name={IntroRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={IntroRoutes.QuickTip} component={QuickTip} />
        <Stack.Screen name={IntroRoutes.GetStarted} component={GetStarted} />
        <Stack.Screen name={IntroRoutes.MyLocation} component={MyLocation} />
        <Stack.Screen
          component={CreateAccount}
          name={IntroRoutes.CreateAccount}
        />
        <Stack.Screen
          component={AccountVerification}
          name={IntroRoutes.AccountVerification}
        />
        <Stack.Screen
          component={IdentityVerification}
          name={IntroRoutes.IdentityVerification}
        />
        <Stack.Screen
          component={RequestLocationAccess}
          name={IntroRoutes.RequestLocationAccess}
        />
        <Stack.Screen
          component={AccountVerificationCompleted}
          name={IntroRoutes.AccountVerificationCompleted}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
