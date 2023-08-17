export enum IntroRoutes {
  Welcome = 'Welcome',
  QuickTip = 'QuickTip',
  GetStarted = 'GetStarted',
}

export type IntroStackParamList = {
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.QuickTip]: undefined;
  [IntroRoutes.GetStarted]: undefined;
};
