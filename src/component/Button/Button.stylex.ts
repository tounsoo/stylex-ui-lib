import {color, spacing, background} from '../../token/core.stylex'
import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
// const DARK = '@media (prefers-color-scheme: dark)';

export const buttonTokens = stylex.defineVars({
    //base
    baseBorder: 'none',
    baseCursor: 'pointer',
    baseFontSize: '14px',
    basePadding: `${spacing.small} ${spacing.medium}`,
    baseBoxSizing: 'border-box',

    //default 
    defaultBackgroundColor: background.secondary,
    defaultBackgroundColorHover: `color-mix(in srgb, ${background.secondary} 80%, black)`,
    defaultColor: color.onSecondary,

    //primary 
    primaryBackgroundColor: background.primary,
    primaryBackgroundColorHover: `color-mix(in srgb, ${background.primary} 80%, white)`,
    primaryColor: color.onPrimary,

});
