import { Meta, StoryObj } from '@storybook/react-native';
import Button from './Button.index';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    type: { control: 'radio', options: ['filled', 'outlined', 'text', 'error'] },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// small button
export const Primary: Story = {
  args: {
    title: 'Click me',
    size: 'medium',
    type: 'filled',
    disabled: false,
    isLoading: false,
  },
};

// disabled
export const Disabled: Story = {
  args: {
    title: 'Click me',
    size: 'medium',
    type: 'filled',
    disabled: true,
  },
};
