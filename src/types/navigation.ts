import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum IntroRoutes {
  Welcome = 'Welcome',
  QuickTip = 'QuickTip',
  MyLocation = 'MyLocation',
  GetStarted = 'GetStarted',
  CreateAccount = 'CreateAccount',
  AccountVerification = 'AccountVerification',
  IdentityVerification = 'IdentityVerification',
  RequestLocationAccess = 'RequestLocationAccess',
  AccountVerificationCompleted = 'AccountVerificationCompleted',
}

export type IntroStackParamList = {
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.QuickTip]: undefined;
  [IntroRoutes.MyLocation]: undefined;
  [IntroRoutes.GetStarted]: undefined;
  [IntroRoutes.CreateAccount]: undefined;
  [IntroRoutes.IdentityVerification]: undefined;
  [IntroRoutes.RequestLocationAccess]: undefined;
  [IntroRoutes.AccountVerification]: {email: string};
  [IntroRoutes.AccountVerificationCompleted]: undefined;
};

export type IntroStackRoutes<T extends keyof IntroStackParamList> =
  NativeStackScreenProps<IntroStackParamList, T>;
