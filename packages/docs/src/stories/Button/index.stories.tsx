import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@gabs-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button Primary',
    variant: 'contained',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button Secondary',
    variant: 'outlined',
  },
}
