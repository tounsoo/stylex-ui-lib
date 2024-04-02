import {color, spacing, corner, background} from '../../token/global.stylex'
import * as stylex from '@stylexjs/stylex';

export const buttonTokens = stylex.defineVars({
    //base
    baseBorder: 'none',
    baseCursor: 'pointer',
    baseFontSize: '14px',
    basePadding: `${spacing.small} ${spacing.medium}`,
    baseBoxSizing: 'border-box',
    baseBorderRadius: corner.round,

    //default 
    defaultBackgroundColor: background.secondary,
    defaultBackgroundColorHover: `color-mix(in srgb, ${background.secondary} 90%, currentColor)`,
    defaultColor: color.onSecondary,

    //cta 
    ctaBackgroundColor: background.primary,
    ctaBackgroundColorHover: `color-mix(in srgb, ${background.primary} 80%, currentColor)`,
    ctaColor: color.onPrimary,
    
    //destructive 
    destructiveBackgroundColor: background.danger,
    destructiveBackgroundColorHover: `color-mix(in srgb, ${background.danger} 80%, currentColor)`,
    destructiveColor: color.onDanger,
});
