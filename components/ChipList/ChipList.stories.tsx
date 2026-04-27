import { Meta, StoryObj } from '@storybook/react-native';
import ChipList from './ChipList.index';

const meta: Meta<typeof ChipList> = {
  title: 'ChipList',
  component: ChipList,
  argTypes: {
    label: { control: 'text' },
    onSelect: { action: 'chip-selected' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// default chip list
export const Primary: Story = {
  args: {
    label: 'Select a chip',
    onSelect: () => null,
    listData: [
      { id: 1, title: 'Chip 1', color: 'red' },
      { id: 2, title: 'Chip 2', color: 'blue' },
      { id: 3, title: 'Chip 3', color: 'green' },
    ],
  },
};
