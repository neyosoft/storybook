import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum IntroRoutes {
  Login = 'Login',
  Welcome = 'Welcome',
  QuickTip = 'QuickTip',
  MyLocation = 'MyLocation',
  GetStarted = 'GetStarted',
  PasswordReset = 'PasswordReset',
  CreateAccount = 'CreateAccount',
  ForgetPassword = 'ForgetPassword',
  AccountVerification = 'AccountVerification',
  IdentityVerification = 'IdentityVerification',
  RequestLocationAccess = 'RequestLocationAccess',
  PasswordResetCompleted = 'PasswordResetCompleted',
  AccountVerificationCompleted = 'AccountVerificationCompleted',
}

export type IntroStackParamList = {
  [IntroRoutes.Login]: undefined;
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.QuickTip]: undefined;
  [IntroRoutes.MyLocation]: undefined;
  [IntroRoutes.GetStarted]: undefined;
  [IntroRoutes.CreateAccount]: undefined;
  [IntroRoutes.PasswordReset]: undefined;
  [IntroRoutes.ForgetPassword]: undefined;
  [IntroRoutes.IdentityVerification]: undefined;
  [IntroRoutes.RequestLocationAccess]: undefined;
  [IntroRoutes.PasswordResetCompleted]: undefined;
  [IntroRoutes.AccountVerificationCompleted]: undefined;
  [IntroRoutes.AccountVerification]: {
    email: string;
    type: 'CreateAccount' | 'ForgetPassword';
  };
};

export type IntroStackRoutes<T extends keyof IntroStackParamList> =
  NativeStackScreenProps<IntroStackParamList, T>;
