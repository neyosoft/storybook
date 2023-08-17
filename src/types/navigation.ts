import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum IntroRoutes {
  Welcome = 'Welcome',
  QuickTip = 'QuickTip',
  GetStarted = 'GetStarted',
  CreateAccount = 'CreateAccount',
}

export type IntroStackParamList = {
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.QuickTip]: undefined;
  [IntroRoutes.GetStarted]: undefined;
  [IntroRoutes.CreateAccount]: undefined;
};

export type IntroStackRoutes<T extends keyof IntroStackParamList> =
  NativeStackScreenProps<IntroStackParamList, T>;
