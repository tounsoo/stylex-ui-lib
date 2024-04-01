import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
export const DARK = '@media (prefers-color-scheme: dark)';

export const breakpoint = stylex.defineVars({
  mobile: '@media (min-width: 640px)',
  laptop: '@media (min-width: 1024px)',
  desktop: '@media (min-width: 1280px)',
});

export const spacing = stylex.defineVars({
    none: '0px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '20px',
    xlarge: '32px',
    xxlarge: '48px',
    xxxlarge: '96px',
  });


export const color = stylex.defineVars({
  primary: {default: 'black', [DARK]: 'white'},
  secondary: {default: '#333', [DARK]: '#ccc'},
  onPrimary: {default: 'white', [DARK]: 'black'},
  onSecondary: {default: 'black', [DARK]: 'white'},
});

export const background = stylex.defineVars({
  default: {default: 'white', [DARK]: 'black'},
  primary: {default: 'black', [DARK]: 'white'},
  secondary: {default: '#ececec', [DARK]: '#333'},
});
