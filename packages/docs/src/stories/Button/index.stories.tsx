import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@gabs-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button Primary',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button Secondary',
  },
}
