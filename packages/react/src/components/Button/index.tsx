import { ComponentProps } from 'react'

export function Button({ ...props }) {
  return <button {...props}>{props.children}</button>
}

export type ButtonProps = ComponentProps<typeof Button>
