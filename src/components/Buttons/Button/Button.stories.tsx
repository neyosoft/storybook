import {Button, ButtonProps} from './Button';

import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<ButtonProps>;

export default {
  title: 'Button',
  component: Button,
};

export const Basic: Story = {
  args: {
    label: 'Get Started',
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};
