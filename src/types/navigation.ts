import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum IntroRoutes {
  Welcome = 'Welcome',
  QuickTip = 'QuickTip',
  GetStarted = 'GetStarted',
  CreateAccount = 'CreateAccount',
  AccountVerification = 'AccountVerification',
  AccountVerificationCompleted = 'AccountVerificationCompleted',
}

export type IntroStackParamList = {
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.QuickTip]: undefined;
  [IntroRoutes.GetStarted]: undefined;
  [IntroRoutes.CreateAccount]: undefined;
  [IntroRoutes.AccountVerification]: {email: string};
  [IntroRoutes.AccountVerificationCompleted]: undefined;
};

export type IntroStackRoutes<T extends keyof IntroStackParamList> =
  NativeStackScreenProps<IntroStackParamList, T>;
