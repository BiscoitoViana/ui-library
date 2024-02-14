import type { Meta, StoryObj, } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Primary button"
  }
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Secondary button"
  }
}

// This button is used for destructive actions such as delete
export const Danger: Story = {
  args: {
    variant: "danger",
    size: "sm",
    children: "Danger button"
  }
}

export const AllButtons = () => {
  return (
    <div className="flex gap-x-2">
      <Button variant="primary">Primary</Button>
      <Button>Secondary</Button> 
      <Button variant="danger">Danger</Button>
    </div>
  )
}

export const PrimaryButtonGroup = () => {
  return (
    <div className="flex gap-x-2">
      <Button variant="primary">Submit</Button>
      <Button>Cancel</Button> 
    </div>
  )
}

export const DangerButtonGroup = () => {
  return (
    <div className="flex gap-x-2">
      <Button variant="danger">Delete</Button>
      <Button>Cancel</Button> 
    </div>
  )
}