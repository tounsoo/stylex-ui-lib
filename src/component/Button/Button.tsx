"use client"

import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import type { Theme } from '@stylexjs/stylex';
import { buttonTokens } from "./Button.stylex";
import { layoutStyleX } from "../../types/stylex";

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'style'> & {
    variant?: 'default' | 'cta' | 'destructive';
    style?: layoutStyleX;
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
      borderRadius: buttonTokens.baseBorderRadius,
      backgroundColor: {
        default: buttonTokens.defaultBackgroundColor,
        ':hover': buttonTokens.defaultBackgroundColorHover,
      },
      color: buttonTokens.defaultColor,
    },
    default: {},
    cta: {
      backgroundColor: {
        default: buttonTokens.ctaBackgroundColor,
        ':hover': buttonTokens.ctaBackgroundColorHover,
      },
      color: buttonTokens.ctaColor
    },
    destructive: {
      backgroundColor: {
        default: buttonTokens.destructiveBackgroundColor,
        ':hover': buttonTokens.destructiveBackgroundColorHover,
      },
      color: buttonTokens.destructiveColor
    },
  });
  
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { variant = 'default', style, theme, ...rest } = props;

    return <button ref={ref} {...stylex.props(theme, ButtonStyles.base, ButtonStyles[variant], style)} {...rest}/>
})
