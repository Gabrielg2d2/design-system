import React, { ComponentProps } from 'react'

export function Button({ ...props }): JSX.Element {
  return <button {...props}>{props.children}</button>
}

export type ButtonProps = ComponentProps<typeof Button>
