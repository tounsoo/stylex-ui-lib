import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant: 'blue' | 'pink'
}

const styles = stylex.create({
    blue: {
      backgroundColor: {
        default: 'blue',
        ':hover': 'darkblue',
      },
      color: 'white',
    },
    pink: {
      backgroundColor: {
        default: 'pink',
        ':hover': 'red',
      },
    },
  });

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { variant, ...rest } = props;
    
    return <button ref={ref} {...rest} {...stylex.props(styles[variant])} />
})
