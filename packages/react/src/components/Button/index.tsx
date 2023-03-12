import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { ComponentProps } from 'react'

export function Button({ ...props }: MuiButtonProps) {
  return <MuiButton {...props}>{props.children}</MuiButton>
}

export type ButtonProps = ComponentProps<typeof Button>
