export enum IntroRoutes {
  Welcome = 'Welcome',
  GetStarted = 'GetStarted',
}

export type IntroStackParamList = {
  [IntroRoutes.Welcome]: undefined;
  [IntroRoutes.GetStarted]: undefined;
};
