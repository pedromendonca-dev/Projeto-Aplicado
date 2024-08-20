import {
    BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
  } from 'styled-system';
  
  export interface DisplayProps extends SpaceProps, LayoutProps, FlexboxProps, PositionProps {}
  
  export interface DecorationProps extends BorderProps, ColorProps, BoxShadowProps, TypographyProps {}
  