import * as stylex from '@stylexjs/stylex';
import { palette } from './palette.stylex';
import { layout } from './layout.stylex';

// media queries
export const DARK = '@media (prefers-color-scheme: dark)';
export const REDUCE_MOTION = "@media (prefers-reduced-motion: reduce)";
export const MOBILE = '@media (min-width: 640px)'
export const LAPTOP = '@media (min-width: 1024px)'
export const DESKTOP = '@media (min-width: 1280px)'

export const spacing = stylex.defineVars({
  /** 0 */
  none: '0',
  /** layout.size75 */
  xsmall: layout.size75,
  /** layout.size100 */
  small: layout.size100,
  /** layout.size75 */
  medium: layout.size200,
  /** layout.size75 */
  large: layout.size300,
  /** layout.size75 */
  xlarge: layout.size400,
  /** layout.size75 */
  xxlarge: layout.size500,
  /** layout.size75 */
  xxxlarge: layout.size700,
  /** layout.size75 */
  huge: layout.size1000,
});
  
export const corner = stylex.defineVars({
  /** 0 */
  square: '0',
  /** layout.size100 */
  round: layout.size100,
  /** layout.size200 */
  rounder: layout.size200,
  /** 500px */
  pill: '500px',
  /** 100% */
  circular: '100%'
});

export const color = stylex.defineVars({
  // primary: {default: palette.gray800, [DARK]: palette.gray200},
  /** palette.gray800 */
  primary: {default: palette.gray800},
  /** palette.gray50 */
  onPrimary: {default: palette.gray50},
  /** palette.gray600 */
  secondary: {default: palette.gray600},
  /** palette.gray800 */
  onSecondary: {default: palette.gray800},
  /** palette.red800 */
  danger: {default: palette.red800},
  /** palette.gray50 */
  onDanger: {default: palette.gray50},
});

export const background = stylex.defineVars({
  /** palette.gray50 */
  default: {default: palette.gray50},
  /** palette.gray800 */
  primary: {default: palette.gray800},
  /** palette.gray200 */
  secondary: {default: palette.gray200},
  /** palette.red800 */
  danger: {default: palette.red800},
});
