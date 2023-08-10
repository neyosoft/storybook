import {AppText, AppTextProps} from './AppText';

import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<AppTextProps>;

export default {
  title: 'AppText',
  component: AppText,
};

export const Basic: Story = {
  args: {
    children: 'This is a custom text label',
  },
};

export const LabelWithColor: Story = {
  args: {
    color: 'red',
    children: 'This is a custom text label',
  },
};

export const BoldAndXLargeLabel: Story = {
  args: {
    ...Basic.args,
    variant: 'bold',
    size: 'xlarge',
  },
};
