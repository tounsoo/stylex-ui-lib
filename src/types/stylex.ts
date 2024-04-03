import type {StyleXStyles} from '@stylexjs/stylex';

export type Layout = StyleXStyles<{
    flex?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexBasis?: string;
    order?: string;

    gridArea?: string;
    gridColumn?: string;
    gridRow?: string;
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
    gridAutoColumns?: string;
    gridAutoRows?: string;

    alignSelf?: string;
    justifySelf?: string;
    placeSelf?: string;
    alignContent?: string;
    justifyContent?: string;
    placeContent?: string;
    alignItems?: string;
    justifyItems?: string;
    placeItems?: string;

    gap?: string;
    columnGap?: string;
    rowGap?: string;
}>

export type Sizing = StyleXStyles<{
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
}>

export type Positioning = StyleXStyles<{
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    start?: string;
    end?: string;
    zIndex?: string;
}>