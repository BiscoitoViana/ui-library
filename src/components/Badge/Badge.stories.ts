import type { Meta, StoryObj, } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ["autodocs"]
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    variant: "info",
    label: "Info badge"
  }
}
