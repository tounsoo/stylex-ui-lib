"use client"

import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import type {StyleXStylesWithout, Theme} from '@stylexjs/stylex';
import { buttonTokens } from "./Button.stylex";

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'style'> & {
    variant?: 'default' | 'primary';
    // example of how to disallow certain styles
    style?: StyleXStylesWithout<{ padding: unknown }>;
    // example of how to use override style on component level
    theme?: Theme<typeof buttonTokens>;
}
``
export const ButtonStyles = stylex.create({
    base: {
      border: buttonTokens.baseBorder,
      cursor: buttonTokens.baseCursor,
      fontSize: buttonTokens.baseFontSize,
      padding: buttonTokens.basePadding,
      boxSizing: buttonTokens.basePadding,
    },
    default: {
      backgroundColor: {
        default: buttonTokens.defaultBackgroundColor,
        ':hover': buttonTokens.defaultBackgroundColorHover,
      },
      color: buttonTokens.defaultColor,
    },
    primary: {
      backgroundColor: {
        default: buttonTokens.primaryBackgroundColor,
        ':hover': buttonTokens.primaryBackgroundColorHover,
      },
      color: buttonTokens.primaryColor
    },
  });
  
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { variant = 'default', style, theme, ...rest } = props;

    return <button ref={ref} {...stylex.props(theme, ButtonStyles.base, ButtonStyles[variant], style)} {...rest}/>
})
