import {
  OnboardingSnapCard,
  OnboardingSnapCardProps,
} from './OnboardingSnapCard';

import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<OnboardingSnapCardProps>;

export default {
  title: 'OnboardingSnapCard',
  component: OnboardingSnapCard,
};

export const Basic: Story = {
  args: {
    title: 'FAST',
    description: 'Secure & Reliable',
  },
};
