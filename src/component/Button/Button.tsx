import { ComponentPropsWithoutRef, forwardRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant: 'blue' | 'pink'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { variant, ...rest } = props;
    console.log({variant})
    return <button ref={ref} {...rest} />
})
