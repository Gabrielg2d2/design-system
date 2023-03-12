import { ComponentProps } from 'react';

declare function Button({ ...props }: {
    [x: string]: any;
}): JSX.Element;
type ButtonProps = ComponentProps<typeof Button>;

export { Button, ButtonProps };
