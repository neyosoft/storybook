import {AppText, AppTextProps} from './AppText';

import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<AppTextProps>;

export default {
  title: 'AppText',
  component: AppText,
};

export const Basic: Story = {
  args: {
    color: 'red',
    children: 'Hello',
  },
};

export const AnotherExample: Story = {
  args: {
    color: 'red',
    variant: 'bold',
    size: 'xlarge',
    children: 'Hello',
  },
};
